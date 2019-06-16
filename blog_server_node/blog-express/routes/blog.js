var express = require('express');
var router = express.Router();

// 获取列表
router.get('/list', function(req, res, next) {
    // res.json 返回json格式数据,同时设置content-type:application/json
    res.json({
        code: 0,
        data: [1,2,3]
    })
});

// 获取详情
router.get('/detail', function(req, res, next) {
    res.json({
        code: 0,
        data: {
            title: 'sss'
        }
    })
});

// 新增
router.post('/add', function(req, res, next) {
    res.json({
        code: 0,
        data: {
            title: 'sss'
        }
    })
});

// 更新
router.post('/update', function(req, res, next) {
    res.json({
        code: 0,
        data: {
            title: 'sss'
        }
    })
});

// 删除
router.post('/del', function(req, res, next) {
    res.json({
        code: 0,
        data: {
            title: 'sss'
        }
    })
});

module.exports = router;
