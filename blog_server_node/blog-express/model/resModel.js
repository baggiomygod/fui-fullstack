/**
 * code: success:0 error:-1 server error:500 操作失败：-999， 未登录：404 账号密码错误 401未登录 400 登录失效
 */
class BaseModel {
    constructor(data, message, code) {
        if (typeof data === 'string') {
            this.msg = data
            data = null
            code = 0
            message = null
        }
        if (data) {
            this.data = data
        }
        if (message) {
            this.msg = message
        }
        if (code) {
            this.code = code
        }
    }
}

class SuccessModel extends BaseModel {
    constructor(data, message, code) {
        super(data, message, code)
        this.code = code || 0
        this.msg = message
    }
}


class ErrorModel extends BaseModel {
    constructor(data, message, code) {
        super(data, message)
        this.code = code || -1
        this.msg = message
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}