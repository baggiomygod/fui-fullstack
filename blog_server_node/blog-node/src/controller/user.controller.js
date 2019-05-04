
const user = {
    username: 'admin',
    password: '123456'
}
const loginCheck = (username, password) => {
    if (username === user.username && password === user.password) {
        return true
    } else {
        return false
    }
}

module.exports = {
    loginCheck
}