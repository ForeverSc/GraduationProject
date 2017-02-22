const mongoose = require('mongoose');
const ShopSchema = require('../schemas/shops');
const Shop = mongoose.model('shop', ShopSchema);
/**
 * errCode
 * 000100: 数据库错误
 * 000001: 店铺已经存在
 * 000010: 店铺不存在
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
        if (dbShop) {
            let result = '商家：' + shop.shopName + '已存在';
            console.log(result);
            return res.send({
                errCode: '000001',
                result
            });
        }

        shop.updatePassword(shop.password, function (err) {
            if (err) {
                return res.send({
                    errCode: '000000',
                    result: err
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
    });
};

exports.login = function (req, res) {
    let shop = new Shop();
    shop.shopName = req.body.shopName;
    shop.password = req.body.password;

    Shop.findOneByShopName(shop.shopName, function (err, dbShop) {
        if (err) {
            return res.send({
                errCode: '000100',
                result: err
            });
        }

        //用户不存在
        if (!dbShop) {
            return res.send({
                errCode: '000010',
                result: '用户不存在！'
            });
        }

        dbShop.checkPassword(shop.password, (err, isMatch) => {
            if (err) {
                return res.send({
                    errCode: '000100',
                    result: err
                });
            }

            if (!isMatch) {
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

//获取店铺信息
exports.getShopInfo = function (req, res) {
    let shop = new Shop();
    shop.shopName = req.body.shopName;

    Shop.findOneByShopName(shop.shopName, function (err, dbShop) {
        if (err) {
            return res.send({
                errCode: '000100',
                result: err
            });
        }

        if (!dbShop) {
            return res.send({
                errCode: '000010',
                result: '店铺不存在'
            })
        }

        let data = {
            shopName: dbShop.shopName,
            shopTel: dbShop.shopTel,
            shopAddr: dbShop.shopAddr,
            shopDetail: dbShop.shopDetail,
            shopLogo: dbShop.shopLogo
        };

        return res.send({
            data,
            errCode: '000000',
            result: 'success'
        });

    });
};

//更新店铺信息
exports.updateShopInfo = function (req, res) {
    let shop = new Shop();
    shop.shopName = req.body.shopName;
    shop.shopTel = req.body.shopTel;
    shop.shopAddr = req.body.shopAddr;
    shop.shopDetail = req.body.shopDetail;

    Shop.findOneByShopName(shop.shopName, function (err, dbShop) {
        if (err) {
            return res.send({
                errCode: '000100',
                result: err
            });
        }

        if (!dbShop) {
            return res.send({
                errCode: '000010',
                result: '店铺不存在！'
            });
        }

        dbShop.shopTel = shop.shopTel;
        dbShop.shopAddr = shop.shopAddr;
        dbShop.shopDetail = shop.shopDetail;

        dbShop.save().then(shop => {
            res.send({
                errCode: '000000',
                result: shop.shopName + '更新成功！'
            });
        }, err => {
            res.send({
                errCode: '000100',
                result: err
            })
        });
    });
};

//更新店铺菜单
exports.updateShopMenu = function (req, res) {
    let shop = new Shop();
    shop.shopName = req.body.shopName;
    shop.shopMenu = req.body.shopMenu;

    Shop.findOneByShopName(shop.shopName, function (err, dbShop) {
        if (err) {
            return res.send({
                errCode: '000100',
                result: err
            });
        }

        if (!dbShop) {
            return res.send({
                errCode: '000010',
                result: '店铺不存在！'
            });
        }

        dbShop.shopMenu = shop.shopMenu;
        dbShop.save().then(shop => {
            return res.send({
                errCode: '000000',
                result: shop.shopName + '菜单更新成功！'
            });
        }, err => {
            return res.send({
                errCode: '000100',
                result: err
            })
        });
    });
};

//获取店铺菜单
exports.getShopMenu = function (req, res) {
    let shop = new Shop();
    shop.shopName = req.body.shopName;

    Shop.findOneByShopName(shop.shopName, function (err, dbShop) {
        if (err) {
            return res.send({
                errCode: '000100',
                result: err
            });
        }

        if (!dbShop) {
            return res.send({
                errCode: '000010',
                result: '店铺不存在！'
            });
        }

        return res.send({
            data: dbShop.shopMenu,
            errCode: '000000',
            result: '菜单查询成功！'
        });

    });

};

//获取店铺列表
exports.getShopList = function (req, res) {
    Shop.findAllShops(function (err, dbShops) {
        if (err) {
            return res.send({
                errCode: '0001000',
                result: err
            });
        }

        let shopList = [];

        dbShops.forEach(function (value, index, array) {
            let shop = {
                shopName: value.shopName,
                shopAddr: value.shopAddr,
                shopTel: value.shopTel,
                shopDetail: value.shopDetail
            };
           shopList.push(shop);
        });

        return res.send({
            data: shopList,
            errCode: '000000',
            result: 'success'
        });
    })
};
