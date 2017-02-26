const express = require('express');
const Bills = express.Router();
const bills = require('../middlewares/bills');

Bills.post('/order', bills.order)
     .post('/getOrderListByUsername', bills.getOrderListByUsername)
     .post('/getOrderListByShopName', bills.getOrderListByShopName)
     .post('/getOrderInfoById', bills.getOrderInfoById)
     .post('/ensureOrder', bills.ensureOrder)
     .post('/cancelOrder', bills.cancelOrder)
     .post('/ensureReceived', bills.ensureReceived);

module.exports = Bills;