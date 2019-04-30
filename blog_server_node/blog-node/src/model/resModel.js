class BaseModel {
    constructor (data, message) {
        if (typeof data === 'string') {
            this.msg = data
            data = null
            message = null
        }
        if (data) {
            this.data = data
        }
        if (message) {
            this.msg = message
        }
    }
}

class SuccessModel extends BaseModel {
    constructor(data, message) {
        super(data, message)
        this.errorno = 0
        this.msg = message
    }
}

class ErrorModel extends BaseModel {
    constructor(data, message) {
        super(data, message)
        this.errorno = -1
        this.msg = '失败'
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}