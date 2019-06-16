var express = require('express');
var router = express.Router();

const list = [
    {id: 1, name: 'sss'},
    {id: 2, name: 'ss1'},
]
router.get('/subject/list', function(req, res, next) {
    // res.json 返回json格式数据,同时设置content-type:application/json
    res.json({
        code: 0,
        message: '',
        messageCode: '',
        success: true,
        data: {data: list, totalPage: 11},
    })
});

router.post('/subject/insert', function(req, res, next) {
    // res.json 返回json格式数据,同时设置content-type:application/json
    const params = req.body
    list.push({id: params.id, name: params.name});
    res.json({
        code: 0,
        message: '',
        messageCode: '',
        success: true,
        data: {}
    })
});

router.post('/subject/update', function(req, res, next) {
    // res.json 返回json格式数据,同时设置content-type:application/json
    res.json({
        code: 0,
        message: '',
        messageCode: '',
        success: true,
        data: {}
    })
});

router.get('/course/catalog/list', function(req, res, next) {
    // res.json 返回json格式数据,同时设置content-type:application/json
    res.json({
        code: 0,
        message: '',
        messageCode: '',
        success: true,
        data: {data:[
                {
                    "bizType": "string",
                    "bizName": "string",
                    "subjectCodeName": "ssss",
                    "courseLecturerId": "string",
                    "courseModeName": "sada",
                    "courseLevel": 0,
                    "courseMode": "string",
                    "createTime": "2019-06-13T07:13:03.661Z",
                    "creator": "string",
                    "id": 0,
                    "isDeleted": "string",
                    "modifier": "string",
                    "modifyTime": "2019-06-13T07:13:03.661Z",
                    "name": "string",
                    "parentCourseId": 0,
                    "remark": "string",
                    "subjectCode": "string"
                  }
        ],
        totalPage: 30,
    }
    })
});

// 能力类别下拉
router.get('/capability/category/list', function(req, res, next) {
    // res.json 返回json格式数据,同时设置content-type:application/json
    res.json({
        code: 0,
        message: '',
        messageCode: '',
        success: true,
        data: [
            {
                "code": "string",
                "createTime": "2019-06-13T07:13:03.694Z",
                "creator": "string",
                "id": 0,
                "isDeleted": "string",
                "modifier": "string",
                "modifyTime": "2019-06-13T07:13:03.694Z",
                "name": "string",
                "remark": "string"
            }
        ]
    })
});
module.exports = router;
