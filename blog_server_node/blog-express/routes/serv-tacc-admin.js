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

// 课程类型列表
router.get('/dictionary/course/mode/list', function(req, res, next) {
    res.json({
        code: 0,
        message: '',
        messageCode: '',
        success: true,
        data: [
        {
            "code": "string",
            "createTime": "2019-06-17T06:31:40.167Z",
            "creator": "string", 
            "id": 0,
            "isDeleted": "string",
            "modifier": "string",
            "modifyTime": "2019-06-17T06:31:40.167Z",
            "name": "string",
            "remark": "string",
            "type": "string"
          }
        ]
    })
})

// 讲师列表
router.get('/dictionary/lecturer/list', function(req, res, next) {
    res.json({
        code: 0,
        message: '',
        messageCode: '',
        success: true,
        data: [
            {
                "about": "string",
                "bodyPhotoUrl": "string",
                "characteristic": "string",
                "id": 0,
                "name": "string",
                "photoUrl": "string",
                "title": "string"
              }
        ]
    })
})


// 目录列表
router.get('/course/catalog/list', function(req, res, next) {
    res.json({
        code: 0,
        message: '',
        messageCode: '',
        success: true,
        data: [
            {
                "courseId": 0,
                "createTime": "2019-06-17T06:31:40.116Z",
                "creator": "string",
                "id": 0,
                "isDeleted": "string",
                "lessonLecturerId": "string",
                "modifier": "string",
                "modifyTime": "2019-06-17T06:31:40.116Z",
                "name": "string",
                "remark": "string",
                "type": "string"
              }
        ]
    })
})

// 删除
router.get('/course/catalog/del', function(req, res, next) {
    res.json({
        code: 0,
        message: '',
        messageCode: '',
        success: true,
        data: {}
    })
})

module.exports = router;
