const formidable = require('formidable');
const UPLOAD_FOLDER = 'data/'
const fs = require('fs')
const mongoose = require('mongoose');
const FileSchema = require('../schemas/files');
const File = mongoose.model('file', FileSchema);

//上传店铺图片
exports.uploadFile = function (req, res) {
    const curUser = req.query.name;
    const userDir = UPLOAD_FOLDER + curUser;

    if (!fs.existsSync(userDir)) {
        fs.mkdirSync(userDir);
    }
    let form = new formidable.IncomingForm();
    form.encoding = 'utf-8'
    form.uploadDir = userDir
    form.keepExtensions = true
    form.maxFieldsSize = 2 * 1024 *1024;
    form.type = true;
    let displayUrl;

    form.parse(req, function (err, fields, files) {
        if (err) {
            return res.send({
                errCode: '100200',
                result: err
            });
        }
        let extName = ''; //后缀名

        switch (files.file.type) {
            case 'image/pjpeg':
                extName = 'jpg';
                break;
            case 'image/jpeg':
                extName = 'jpg';
                break;
            case 'image/png':
                extName = 'png';
                break;
            case 'image/x-png':
                extName = 'png';
                break;
        }
        if (extName.length === 0) {
            return res.send({
                errCode: '100202',
                result: '只支持png和jpg格式图片'
            });
        } else {
            let picName = '/' + Date.now() + '.' + extName;
            let newPath = form.uploadDir + picName;
            displayUrl = curUser+ picName;
            fs.renameSync(files.file.path, newPath); //重命名

            let file = new File();
            file.name = picName.slice(1);
            file.url = displayUrl;

            file.save().then(file=>{
                return res.send({
                    data: file,
                    errCode: '000000',
                    result: '上传成功！'
                })
            }, err=>{
                res.send({
                    errCode: '000100',
                    result: err
                })
            });
        }
    });
};