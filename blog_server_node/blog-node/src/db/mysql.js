const mysql = require('mysql')
const {MYSQL_CONF} = require('../conf/db')

// 创建连接对象
const connect = mysql.createConnection(MYSQL_CONF)

// 开始连接
connect.connect()

// 执行sql函数
function exec(sql) {
    const promise = new Promise((resolve, reject) => {
        connect.query(sql, (err, result) => {
            if (err) {
                reject(err)
                return
            }
            resolve(result)
        })
    })
    return promise
}

module.exports = {
    exec
}

