const env = process.env.NODE_ENV // 环境变量
// 配置
let MYSQL_CONF

if (env === 'development') {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'rbaggio10',
        port: '3306',
        database: 'wfblog'
    }
}
if (env === 'production') {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'rbaggio10',
        port: '3306',
        database: 'wfblog'
    }
}

module.exports = {
    MYSQL_CONF
}