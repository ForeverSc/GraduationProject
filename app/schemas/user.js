const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 3;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true //非空验证
    },
    password: {
        type: String,
        unique: true,
        required: true
    }
});

userSchema.methods= {
    updatePassword(password, cb){
        let user = this;
        bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
            if (err) return cb(err);
            bcrypt.hash(password, salt, function(err, hash) {
                if (err) return cb(err);
                user.password = hash;
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

userSchema.statics = {
    findOneByUsername(username, cb){
        return this
            .findOne({ username })
            .exec(cb)
    }
};

module.exports = userSchema;

