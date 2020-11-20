/**
 * little bird 后端
 */

var express = require('express');
var router = express.Router();
const { SuccessModel, ErrorModel } = require('../model/resModel')

router.post('/test', async (req, res, next) => {
    console.log(req.body)
    setTimeout(() => {
        res.json(new SuccessModel({data: req.body.name + '正在闯关'}, '成功'))
    }, 100)
});



module.exports = router;