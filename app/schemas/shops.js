const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 3;

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
    password: {
        type: String,
        unique: true,
        required: true
    }
});

shopSchema.pre('save', function (next) {
    let shop = this;

    //加密
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);
        bcrypt.hash(shop.password, salt, function(err, hash) {
            if (err) return next(err);
            shop.password = hash;
            next();
        })
    });
});

shopSchema.methods= {
    updatePassword(password, cb){
        let shop = this;
        bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
            if (err) return cb(err);
            bcrypt.hash(password, salt, function(err, hash) {
                if (err) return cb(err);
                shop.password = hash;
                cb(null);
            });
        });
    },
    checkPassword(password, cb){
        bcrypt.compare(password, this.password, function (err, isMatch) {
            if(err) return cb(err)
            cb(null, isMatch)
        })
    }
};

shopSchema.statics = {
    findOneByShopName(shopName, cb){
        return this
            .findOne({ shopName })
            .exec(cb)
    }
};

module.exports = shopSchema;

