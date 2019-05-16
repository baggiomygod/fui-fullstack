const redis = require('redis')
const { REDIS_CONF } = require('../conf/db')

// 创建客户端
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)
redisClient.on('error', err => {
    console.error('resid err:', err)
})

function redisSet(key, val) {
    console.log('resid set:', key, val)
    if (typeof val === 'object') {
        val = JSON.stringify(val)
    }
    redisClient.set(key, val, redis.print)
    redisGet(key).then(res => { console.log('get after set:', res) })
}

function redisGet(key) {
    console.log('resid get...')
    const promise = new Promise((resolve, reject) => {
        redisClient.get(key, (err, val) => {
            if (err) {
                reject(err)
                return
            }

            if (val === null) {
                resolve(null)
            }

            try {
                resolve(JSON.parse(val))
            } catch (ex) {
                resolve(val)
            }
        })
    })
    return promise
}

module.exports = {
    redisGet,
    redisSet
}