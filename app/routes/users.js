const express = require('express');
const User = express.Router();
const user = require('../middlewares/user')

/* GET users listing. */
User.post('/register', user.register);

module.exports = User;
