const express = require('express');
const User = express.Router();
const user = require('../middlewares/user')

/* GET users listing. */
User.post('/register', user.register)
    .post('/login', user.login)
    .post('/logout', user.logout)
    .post('/getUserInfo', user.getUserInfo)
    .post('/updateUserInfo', user.updateUserInfo);

module.exports = User;
