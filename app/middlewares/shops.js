const mongoose = require('mongoose');
const ShopSchema = require('../schemas/shops');
const Shop = mongoose.model('shop', ShopSchema);
/**
 * errCode
 * 000100: 数据库错误
 * 000001: 用户已经存在
 * 000010: 用户不存在
 * 000011: 密码错误
 **/
exports.register = function (req, res) {
    let shop = new Shop();
    shop.shopName = req.body.shopName;
    shop.shopTel = req.body.shopTel;
    shop.shopAddr = req.body.shopAddr;
    shop.password = req.body.password;

    Shop.findOneByShopName(shop.shopName, function (err, dbShop) {
        if (err) {
            res.send({
                errCode: '000100',
                result: err
            })
        }
        //用户已经存在
        if(dbShop){
            let result = '商家：' + shop.shopName + '已存在';
            console.log(result);
            return res.send({
                errCode: '000001',
                result
            });
        }

        shop.save().then(shop => {
            return res.send({
                errCode: '000000',
                result: shop.shopName + '注册成功！'
            });
        }, err => {
            console.log(err);
            return res.send({
                errCode: '000100',
                result: err
            });
        });
    });
};

exports.login = function (req, res) {
    let shop = new Shop();
    shop.shopName = req.body.shopName;
    shop.password = req.body.password;

    Shop.findOneByShopName(shop.shopName, function (err, dbShop) {
        if(err){
            return res.send({
                errCode: '000100',
                result: err
            });
        }

        //用户不存在
        if(!dbShop){
            return res.send({
                errCode: '000010',
                result: '用户不存在！'
            });
        }

        dbShop.checkPassword(shop.password, (err, isMatch) => {
            if(err){
                return res.send({
                    errCode: '000100',
                    result: err
                });
            }

            if(!isMatch){
                return res.send({
                    errCode: '000011',
                    result: '用户名或密码错误！'
                });
            }

            req.session.shop = dbShop;
            return res.send({
                errCode: '000000',
                result: '登录成功！'
            });
        });
    });
};

exports.logout = function (req, res) {
    delete req.session.shop;
    return res.send({
        errCode: '000000',
        result: '登出成功！'
    });
};