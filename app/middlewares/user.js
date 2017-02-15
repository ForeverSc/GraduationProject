const mongoose = require('mongoose');
const UserSchema = require('../schemas/user');
const User = mongoose.model('user', UserSchema);

exports.register = function (req, res) {
    let user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
};

exports.login = function (req, res) {
    let user = new User();
    user.username = req.body.username;
    user.password = req.body.password;

};

exports.logout = function (req, res) {
    let user = new User();
};