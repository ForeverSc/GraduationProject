const express = require('express');
const router = express.Router();
const index = require('../middlewares/index');

router.post('/uploadFile', index.uploadFile);

module.exports = router;
