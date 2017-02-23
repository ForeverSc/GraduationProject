const express = require('express');
const Bills = express.Router();
const bills = require('../middlewares/bills');

Bills.post('/order', bills.order)
     .post('/getOrderListByUsername', bills.getOrderListByUsername)
     .post('/getOrderListByShopName', bills.getOrderListByShopName);

module.exports = Bills;