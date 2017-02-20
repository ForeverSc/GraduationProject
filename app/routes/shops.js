const express = require('express');
const Shop = express.Router();
const shop = require('../middlewares/shops')

Shop.post('/register', shop.register)
    .post('/login', shop.login)
    .post('/logout', shop.logout)
    .post('/getShopInfo', shop.getShopInfo)
    .post('/updateShopInfo', shop.updateShopInfo)
    .post('/updateShopMenu', shop.updateShopMenu)
    .post('/getShopMenu', shop.getShopMenu)
    .post('/getShopList', shop.getShopList);

module.exports = Shop;
