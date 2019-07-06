const mysql = require('mysql')
const {MYSQL_CONF} = require('../conf/db')
const { ObjectKeysCamelCase } = require('../utils/formatUtils')
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
            // resolve(ObjectKeysCamelCase(result))
            result.forEach(item => {
                item.create_time = new Date(item.create_time).toJSON('yyyy-MM-dd')
                item.update_time = new Date(item.update_time).toJSON('yyyy-MM-dd')
            })
            console.log(result)
            resolve(result)
        })
    })
    return promise
}

module.exports = {
    exec,
    escape: mysql.escape
}

