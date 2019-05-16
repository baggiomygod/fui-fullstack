/**
 * app.js 
 * 入口文件
 */
const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
const { redisSet, redisGet } = require('./src/db/redis')
    // 获取cookie过期时间
const getCookieExpires = () => {
        const date = new Date()
        date.setTime(date.getTime() + (24 * 60 * 60 * 1000))
        return date.toGMTString()
    }
    // 处理post data
const getPostData = (req) => {
    const promise = new Promise((resolve, reject) => {
        if (req.method !== 'POST') {
            resolve({})
            return
        }
        if (req.headers['content-type'] !== 'application/json') {
            resolve({})
            return
        }
        let postData = ''
        req.on('data', chunk => {
            postData += chunk.toString()
        })
        req.on('end', () => {
            if (!postData) {
                resolve({})
                return
            }
            resolve(JSON.parse(postData))
        })
    })
    return promise
}
const serverHandle = async(req, res) => {
    // 设置返回格式 JSON 
    res.setHeader('Content-Type', 'application/json')
        // cors 开发模式暂时采用反向代理解决跨域，不用nginx反向代理如何解决options 404问题？
        // res.setHeader('Access-Control-Allow-Origin', req.headers.origin) // 允许跨域
        // res.setHeader('Access-Control-Allow-Credentials', true) // 是否允许发送Cookie，ture为运行 
        // res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST, DELETE')
        // res.setHeader(
        //     "Access-Control-Allow-Headers",
        //     "Content-Type, Access-Control-Allow-Headers, Access-Control-Request-Headers, Access-Control-Request-Method, Authorization, X-Requested-With, User-Agent, Referer, Origin"
        //     )
        // res.setHeader("Access-Control-Max-Age", 1728000)

    // 获取path
    const url = req.url
    req.path = url.split('?')[0]
        // get 解析query
    req.query = querystring.parse(url.split('?')[1])

    // 解析cookie
    const cookieStr = req.headers.cookie || ''
    req.cookie = {}
    cookieStr.split(';').forEach(item => {
        if (!item) {
            return
        }
        const arr = item.split('=')
        const key = arr[0].trim()
        const val = arr[1]
        req.cookie[key] = val
    })


    // 解析session redis
    let needSetCookie = false
    let userId = req.cookie.userid

    if (!userId) {
        needSetCookie = true
        userId = `${Date.now()}_${Math.random()}`
            // 初始化redis中的 session值
        redisSet(userId, {})
    }
    req.sessionId = userId
        // 获取session
    redisGet(req.sessionId).then(sessionData => {
            if (sessionData === null) {
                redisSet(req.sessionId, {})
                    //设置session
                req.session = {}
            } else {
                req.session = sessionData
            }
            console.log('req.session:', req.session)
            return getPostData(req) // 解析post 参数
        })
        .then(async(postData) => {
            req.body = postData
                // 处理blog路由
            const blogData = await handleBlogRouter(req, res)
            if (blogData) {
                needSetCookie && res.setHeader('Set-Cookie', `userid=${userId}; path=/; httponly; expires=${getCookieExpires()}`)
                res.end(JSON.stringify(blogData))
                return
            }

            // 处理user路由
            const userData = await handleUserRouter(req, res)
            if (userData) {
                console.log('need set cookie:', needSetCookie, userData)
                needSetCookie && res.setHeader('Set-Cookie', `userid=${userId}; path=/; httponly; expires=${getCookieExpires()}`)
                res.end(JSON.stringify(userData))
                return
            }

            // 没有匹配到路由
            res.writeHead(404, { 'Content-type': 'text/plain' })
            res.write('404 Not Found\n')
            res.end()
        })


}
module.exports = serverHandle