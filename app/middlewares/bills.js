const mongoose = require('mongoose');
const BillSchema = require('../schemas/bills');
const Bill = mongoose.model('bill', BillSchema);

//下单
exports.order = function (req, res) {
    let bill = new Bill();
    let body = req.body;

    bill.username = body.username;
    bill.shopName = body.shopName;
    bill.dishs = body.dishs;
    bill.total = body.total;

    bill.save().then(bill => {
        res.send({
            errCode: '000000',
            result: '下单成功！'
        });
    }, err => {
        res.send({
            errCode: '000100',
            result: err
        });
    });


};