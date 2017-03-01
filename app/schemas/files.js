const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
    name: String,
    url: String
});


fileSchema.statics = {
    findFileByName(name, cb){
        return this
            .findOne({name})
            .exec(cb)
    }
};

module.exports = fileSchema;
