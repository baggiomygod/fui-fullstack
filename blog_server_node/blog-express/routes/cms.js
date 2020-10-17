var express = require('express');
var router = express.Router();
// const { getList, getDetail, createBlog, updateBlog, delBlog } = require('../controller/blog.controller')
const { SuccessModel, ErrorModel } = require('../model/resModel')
// 获取列表
// 获取详情
router.get('/car_driving', async (req, res, next) => {
    const carDrData = {
        "carInfo":{
            "owner":"zhangsan111",
            "plate":"浙A123456",
            "车型":"跑车"
        },
        "start":{
            "point":[120.113355, 30.130511],
            "time":"2018-02-02 18:00:00"
        },
        "end":{
            "point":[120.441057, 30.237403],
            "time":"2018-02-03 18:00:00"
        }
    }
    res.json(new SuccessModel(carDrData, '成功'))
});

router.get('/person', async (req, res, next) => {
    const personList = [
        { "id": 1, "city": "1", "person_type": "sss", "name": "111", "phone": "11232232322", "position": []},
        { "id": 2, "city": "2", "person_type": "ssd", "name": "222", "phone": "11232342122", "position": []},
        { "id": 3, "city": "3", "person_type": "dde", "name": "333", "phone": "14133222322", "position": []},
        { "id": 4, "city": "4", "person_type": "qwe", "name": "444", "phone": "11232232322", "position": []},
        { "id": 5, "city": "5", "person_type": "asd", "name": "555", "phone": "11232232322", "position": []}
    ]
    res.json(new SuccessModel(personList, '成功'))
});

router.get('/person/:id', async (req, res, next) => {
    const personDetil = {
        "name": "aa",
        "phone": "123454456",
        "address": "hangzhou binjiang XX 3210",
        "sex": "男",
        "age": 18,
        "job": "developer"
    }
    res.json(new SuccessModel(personDetil, '成功'))
});

// 删除
router.post('/person/del/:id', async (req, res, next) => {
    res.json(new SuccessModel({}, '删除成功'))
});

module.exports = router;
