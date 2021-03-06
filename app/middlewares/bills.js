const mongoose = require('mongoose');
const BillSchema = require('../schemas/bills');
const Bill = mongoose.model('bill', BillSchema);
const ShopSchema = require('../schemas/shops');
const Shop = mongoose.model('shop', ShopSchema);
const UserSchema = require('../schemas/user');
const User = mongoose.model('user', UserSchema);

//下单
exports.order = function (req, res) {
    let bill = new Bill();
    let body = req.body;

    bill.username = body.username;
    bill.shopName = body.shopName;
    bill.dishs = body.dishs;
    bill.total = body.total;
    bill.state = 0;

    Shop.findOneByShopName(bill.shopName, function (err, dbShop) {
        if(err){
            return res.send({
                errCode: '000100',
                result: err
            });
        }

        bill.billLogo = dbShop.shopLogo;

        User.findOneByUsername(bill.username, function (err, dbUser) {
            if(err){
                return res.send({
                    errCode: '000100',
                    result: err
                });
            }
            bill.tel = dbUser.tel;
            bill.address = dbUser.address;

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
        });

    })


};

//用户查询订单接口
exports.getOrderListByUsername = function (req, res) {
    let username = req.body.username;

    Bill.findAllBillsByUsername(username, function (err, dbBills) {
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


//店家查询订单接口
exports.getOrderListByShopName = function (req, res) {
    let shopName = req.body.shopName,
        state = req.body.state;

    Bill.findAllBillsByShopName(shopName, state, function (err, dbBills) {
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

//按照ID,查询订单详情
exports.getOrderInfoById = function (req, res) {
    let _id = req.body.orderId;

    Bill.findBillById(_id, function (err, dbBill) {
        if(err){
            return res.send({
                errCode: '000100',
                result: err
            });
        }

        return res.send({
            data: dbBill,
            errCode: '000000',
            result: '订单详情查询成功！'
        });
    });
};

//店家确认接单
exports.ensureOrder = function (req, res) {
    let _id = req.body.orderId;

    Bill.findBillById(_id, function (err, dbBill) {
        if(err){
            return res.send({
                errCode: '000100',
                result: err
            });
        }

        dbBill.state = 1; //更改订单状态为 已接单
        dbBill.save().then(dbBill=>{
            return res.send({
                data: { orderId: dbBill._id },
                errCode: '000000',
                result: '接单成功！'
            });
        }, err=>{
            return res.send({
                errCode: '000100',
                result: err
            });
        });
    });
};

//用户/店家取消接单
exports.cancelOrder = function (req, res) {
  let _id = req.body.orderId;

  Bill.findBillById(_id, function (err, dbBill) {
      if(err){
          return res.send({
              errCode: '000100',
              result: err
          });
      }
      dbBill.state = 3; //更改订单状态为 已接单
      dbBill.save().then(dbBill=>{
          return res.send({
              data: { orderId: dbBill._id },
              errCode: '000000',
              result: '取消订单成功！'
          });
      }, err=>{
          return res.send({
              errCode: '000100',
              result: err
          });
      });
  });
};

//用户确认收货
exports.ensureReceived = function (req, res) {
    let _id = req.body.orderId;

    Bill.findBillById(_id, function (err, dbBill) {
        if(err){
            return res.send({
                errCode: '000100',
                result: err
            });
        }
        dbBill.state = 2; //更改订单状态为 已完成
        dbBill.save().then(dbBills=>{
            return res.send({
                errCode: '000000',
                result: '确认收货成功！'
            });
        }, err=>{
            return res.send({
                errCode: '000100',
                result: err
            });
        });
    });
};