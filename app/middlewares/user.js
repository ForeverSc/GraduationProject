const mongoose = require('mongoose');
const UserSchema = require('../schemas/user');
const User = mongoose.model('user', UserSchema);
/**
 * errCode
 * 000100: 数据库错误
 * 000001: 用户已经存在
 * 000010: 用户不存在
 * 000011: 密码错误
 **/
exports.register = function (req, res) {
    let user = new User();
    user.username = req.body.username;
    user.tel = req.body.tel;
    user.address = req.body.address;
    user.password = req.body.password;

    User.findOneByUsername(user.username, function (err, dbUser) {
        if (err) {
           res.send({
               errCode: '000100',
               result: err
           })
        }
        //用户已经存在
        if(dbUser){
            let result = '用户' + user.username + '已存在';
            console.log(result);
            return res.send({
                errCode: '000001',
                result
            });
        }

        user.updatePassword(user.password, function (err) {
            if (err) {
                return res.send({
                    errCode: '000000',
                    result: err
                });
            }

            user.save().then(user => {
                return res.send({
                    errCode: '000000',
                    result: user.username + '注册成功！'
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
    let user = new User();
    user.username = req.body.username;
    user.password = req.body.password;

    User.findOneByUsername(user.username, function (err, dbUser) {
        if(err){
            return res.send({
                errCode: '000100',
                result: err
            });
        }

        //用户不存在
        if(!dbUser){
            return res.send({
                errCode: '000010',
                result: '用户不存在！'
            });
        }

        dbUser.checkPassword(user.password, (err, isMatch) => {
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

            req.session.user = dbUser;
            return res.send({
                errCode: '000000',
                result: '登录成功！'
            });
        });
    });
};

exports.logout = function (req, res) {
    delete req.session.user;
    return res.send({
        errCode: '000000',
        result: '登出成功！'
    });
};

exports.getUserInfo = function (req, res) {
    let username = req.body.username;

    User.findOneByUsername(username, function (err, dbUser) {
        if(err){
            return res.send({
                errCode: '000100',
                result: err
            });
        }
        return res.send({
            data: dbUser,
            errCode: '000000',
            result: '获取用户信息成功！'
        });
    });
};

exports.updateUserInfo = function (req, res) {
    let username = req.body.username,
        tel = req.body.tel,
        address = req.body.address;


    User.findOneByUsername(username, function (err, dbUser) {
        if(err){
            return res.send({
                errCode: '000100',
                result: err
            });
        }

        dbUser.tel = tel;
        dbUser.address = address;
        dbUser.save().then(user=>{
            return res.send({
                errCode: '000000',
                result: '更新成功！'
            });
        }, err=>{
            return res.send({
                errCode: '000100',
                result: err
            });
        });
    });

};