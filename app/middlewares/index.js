const formidable = require('formidable');
const cacheFolder = 'data';
const UPLOAD_FOLDER = '/'
const fs = require('fs')

//上传店铺图片
exports.uploadFile = function (req, res) {
    const curUser = req.session.user;
    const userDir = cacheFolder + 'data';

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
            res.send(err);
            return;
        }
        var extName = ''; //后缀名
        switch (files.upload.type) {
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
            res.send({
                code: 202,
                msg: '只支持png和jpg格式图片'
            });
            return;
        } else {
            var avatarName = '/' + Date.now() + '.' + extName;
            var newPath = form.uploadDir + avatarName;
            displayUrl = UPLOAD_FOLDER + curUser.id + avatarName;
            fs.renameSync(files.upload.path, newPath); //重命名
            res.send({
                code: 200,
                msg: displayUrl
            });
        }
    });
};