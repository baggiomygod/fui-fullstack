var express = require('express');
var router = express.Router();
const { SuccessModel, ErrorModel } = require('../model/resModel')
const {login} = require('../controller/user.controller')
router.post('/login', async (req, res, next) => {
    const { username, password } = req.body
    const loginResult = await login(username, password)
    const userData = JSON.parse(JSON.stringify(loginResult))
    if (userData[0] && userData[0].username) {
        req.session.username = userData[0].username
        req.session.realname = userData[0].realname
        res.json(new SuccessModel({}, '登录成功'))
        return
    }
    res.json(new ErrorModel({}, '登录失败'))
});

router.get('/login-test', (req, res, next) => {
    if (req.session.username) {
        res.json(
            new SuccessModel({data: '测试ok'}, '已登录')
        )
    } else {
        res.json(
            new ErrorModel('未登录或登录失效')
        )
    }
})

module.exports = router;
