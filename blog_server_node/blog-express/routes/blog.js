var express = require('express');
var router = express.Router();

router.get('/list', function(req, res, next) {
    // res.json 返回json格式数据,同时设置content-type:application/json
    res.json({
        code: 0,
        data: [1,2,3]
    })
});

router.get('/detail', function(req, res, next) {
    res.json({
        code: 0,
        data: {
            title: 'sss'
        }
    })
});

module.exports = router;
