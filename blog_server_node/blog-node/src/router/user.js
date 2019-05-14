const {login} = require('../controller/user.controller')
const {SuccessModel, ErrorModel} = require('../model/resModel')

// 获取cookie过期时间
const getCookieExpires = () => {
    const date = new Date()
    date.setTime(date.getTime() + (24 * 60 * 60 * 1000))
    return date.toGMTString()
}

const handleUserRouter = async (req, res) => {
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]
    // 登录 
    if (method === 'POST' && path === '/api/user/login') {
        const {username, password} = req.body
        const result = await login(username, password)
        const userData = JSON.parse(JSON.stringify(result))
        if (userData[0]) {
            req.session.username = userData[0].username
            req.session.realname = userData[0].realname
            console.log('login router:', req.session)
            return new SuccessModel(userData, '登录成功')
        } else {
            return new ErrorModel('登录失败')
        }
    }

    // test
    if (method === 'GET' && req.path === '/api/user/login-test') {
        if (req.session.username) {
            return new SuccessModel(req.session, '成功')
        } else {
            return new ErrorModel('未登录')
        }
    }
}

module.exports = handleUserRouter