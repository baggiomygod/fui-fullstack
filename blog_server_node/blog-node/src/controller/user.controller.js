const {exec} = require('../db/mysql')
const loginCheck = (username, password) => {
    const sql = `
        select username, realname from users where username='${username}' and password='${password}'
    `
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
    loginCheck
}