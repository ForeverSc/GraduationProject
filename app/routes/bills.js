const express = require('express');
const Bills = express.Router();
const bills = require('../middlewares/bills');

Bills.post('/order', bills.order);


module.exports = Bills