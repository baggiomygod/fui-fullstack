class BaseModel {
    constructor(data, message) {
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
        this.code = 0
        this.msg = message
    }
}

class ErrorModel extends BaseModel {
    constructor(data, message) {
        super(data, message)
        this.code = -1
        this.errorno = -1
        this.msg = message
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}