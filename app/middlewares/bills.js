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
    bill.state = 0;

    //TODO: 获取用户的地址和电话信息填入到bill对象中

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

//用户查询订单接口
exports.getOrderListByUsername = function (req, res) {
    let username = req.body.username

    Bill.findAllBillsByUsername(username, function (err, dbBills) {
        if(err){
            return res.send({
                errCode: '000100',
                result: err
            });
        }

        return res.send({
            data:dbBills,
            errCode: '000000',
            result: '订单查询成功！'
        });
    });
};


//店家查询订单接口
exports.getOrderListByShopName = function (req, res) {
    let shopName = req.body.shopName;

    Bill.findAllBillsByShopName(shopName, function (err, dbBills) {
        if(err){
            return res.send({
                errCode: '000100',
                result: err
            });
        }

        return res.send({
            data: dbBills,
            errCode: '000000',
            result: '订单查询成功！'
        });
    });
};

//查询订单详情
exports.getOrderInfoById = function (req, res) {
    let _id = req.body.orderId;

    Bill.findBillById(_id, function (err, dbBills) {
        if(err){
            return res.send({
                errCode: '000100',
                result: err
            });
        }

        return res.send({
            data: dbBills[0],
            errCode: '000000',
            result: '订单详情查询成功！'
        });
    });
};