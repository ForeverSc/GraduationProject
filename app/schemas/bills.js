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
    state: Number,// 0：待接单，1：已接单，2：已完成，3：未完成
    total: String
});

billSchema.statics = {
    findAllBillsByUsername(username, state, cb){
        return this
            .find({ username, state })
            .exec(cb)
    },
    findAllBillsByShopName(shopName, state, cb){
        return this
            .find({ shopName, state})
            .exec(cb)
    },
    findBillById(_id, cb){
        return this
            .findOne({ _id })
            .exec(cb)
    }
};

module.exports = billSchema;











