const { exec, escape } = require('../db/mysql')
const login = (username, password) => {
    // escape 预防sql注入
    username = escape(username)
    password = escape(password)
    const sql = `
        select username, realname from users where username=${username} and password=${password}
    `
    console.log('user sql:', sql)
    exec(sql).then(res => {
        console.log(res)
    })
    return exec(sql)
}
module.exports = {
    login
}