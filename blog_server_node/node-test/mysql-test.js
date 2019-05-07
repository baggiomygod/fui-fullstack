const mysql = require('mysql')
// 创建连接对象
const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rbaggio10',
    port: '3306',
    database: 'wfblog'
})

// 开始连接
connect.connect()

// const sql = 'select id, username from users'
// const sql = `select id, username from users where username like '%min%'`
const sql = `update users set realname='xxx2' where username='fan1130'`
connect.query(sql, (err, result) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(result)
})

// 关闭连接
connect.end()