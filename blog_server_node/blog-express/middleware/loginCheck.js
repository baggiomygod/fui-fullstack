const { ErrorModel } = require('../model/resModel')

// const ErrorCode = {
//     noLoginCode: -1,
//     normalErrorCode: -2,
//     serverErrorCode: -500,
// }
module.exports = (req, res, next) => {
    if (req.session.username) {
        next()
        return
    }
    res.json(new ErrorModel({}, '未登录'))
}