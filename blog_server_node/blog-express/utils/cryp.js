const crypto = require('crypto')

// 密匙
const SECRET_KEY = 'EwdsNl32_123#'

// md5
function md5 (content) {
    let md5 = crypto.createHash('md5')
    return md5.update(content).digest('hex') // digest输出16进制
}

// 加密函数
function genPassword(password) {
    const str = `password=${password}&key=${SECRET_KEY}`
    return md5(str)
}

module.exports = {
    genPassword
}