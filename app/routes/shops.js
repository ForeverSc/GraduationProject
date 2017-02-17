const express = require('express');
const Shop = express.Router();
const shop = require('../middlewares/shops')

Shop.post('/register', shop.register)
    .post('/login', shop.login)
    .post('/logout', shop.logout);

module.exports = Shop;
