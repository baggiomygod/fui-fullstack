const {loginCheck} = require('../controller/user.controller')
const {SuccessModel, ErrorModel} = require('../model/resModel')
const handleUserRouter = async (req, res) => {
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]
    // 登录
    if (method === 'POST' && path === '/api/user/login') {
        const {username, password} = req.body
        const result = await loginCheck(username, password)
        if (result[0]) {
            return new SuccessModel(result[0], '登录成功')
        } else {
            return new ErrorModel('登录失败')
        }
    }
}

module.exports = handleUserRouter