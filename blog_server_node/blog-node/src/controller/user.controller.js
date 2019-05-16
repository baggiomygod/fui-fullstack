const { exec } = require('../db/mysql')
const login = (username, password) => {
    const sql = `
        select username, realname from users where username='${username}' and password='${password}'
    `
    console.log(sql)
    exec(sql).then(res => {
        console.log(res)
    })
    return exec(sql)
        // if (username === user.username && password === user.password) {
        //     return true
        // } else {
        //     return false
        // }
}

module.exports = {
    login
}