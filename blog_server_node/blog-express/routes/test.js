var express = require('express');
var router = express.Router();
const { SuccessModel, ErrorModel } = require('../model/resModel')

router.get('/list1', async (req, res, next) => {
    setTimeout(() => {
        res.json(new SuccessModel({data: 'list1'}, '查询成功'))
    }, 100)
});
router.get('/list2', async (req, res, next) => {
    res.json(new SuccessModel({data: 'list2'}, '查询成功'))
});



module.exports = router;
