const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

const shopDish = new mongoose.Schema({
    dishName: {
        type: String,
        required: true
    },
    dishPrice: {
        type: String,
        required: true
    },
    dishDetail: String
});

const shopSchema = new mongoose.Schema({
    shopName: {
        type: String,
        required: true
    },
    shopTel: {
        type: String,
        required: true
    },
    shopAddr: {
        type: String,
        required: true
    },
    shopDetail: String,
    shopLogo: String,
    password: {
        type: String,
        unique: true,
        required: true
    },
    shopMenu: [ shopDish ]
});

shopSchema.methods = {
    updatePassword(password, cb){
        let shop = this;
        bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
            if (err) return cb(err);
            bcrypt.hash(password, salt, function (err, hash) {
                if (err) return cb(err);
                shop.password = hash;
                cb(null);
            });
        });
    },
    checkPassword(password, cb){
        bcrypt.compare(password, this.password, function (err, isMatch) {
            if (err) return cb(err)
            cb(null, isMatch)
        })
    }
};

shopSchema.statics = {
    findOneByShopName(shopName, cb){
        return this
            .findOne({shopName})
            .exec(cb)
    },
    findAllShops(cb){
        return this
            .find({})
            .exec(cb)
    }
};

module.exports = shopSchema;

