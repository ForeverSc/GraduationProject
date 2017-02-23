const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
    dishName: String,
    dishPrice: String,
    dishNum: String
});

const billSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    shopName: {
        type: String,
        required: true
    },
    dishs: [ dishSchema ],
    total: String
});

billSchema.statics = {
    findAllBillsByUsername(username, cb){
        return this
            .find({ username })
            .exec(cb)
    },
    findAllBillsByShopName(shopName, cb){
        return this
            .find({ shopName })
            .exec(cb)
    }
};

module.exports = billSchema;











