const express = require('express')

// 本次http请求的实例
const app = express()

app.use((req, res, next) => {
    console.log('start request ...', req.method, req.url)
    next()
})

app.use((req, res, next) => {
    // 模拟处理cookie
    req.cookie = {userId: '123aaa'}
    next()
})

app.use((req, res, next) => {
    // 模拟处理post data
    // 异步
    setTimeout(() => {
        req.body = {
            a: 1,
            b: 2
        }
        next()
    }, 1000)
})

// get post 
app.use('/api', (req, res, next) => {
    console.log('处理 api路由')
    next()
})

// get
app.get('/api', (req, res, next) => {
    console.log('get api路由')
    next()
})

// post
app.post('/api', (req, res, next) => {
    console.log('post api路由')
    next()
})

// get
app.get('/api/get-cookie', (req, res, next) => {
    console.log('get api/get-cookie路由')
    res.json({
        code: 0,
        data: {
            cookie: req.cookie
        }
    })
})

// post
app.post('/api', (req, res, next) => {
    console.log('post /api/get-post-data')
    res.json({
        code: 0,
        data: {
            result: req.body
        }
    })
})

app.use((req, res, next) => {
    console.log('处理 404')
    res.json({
        code: -1,
        message: '404 not found'
    })
})

app.listen(3000, () => {
    console.log('run in port 3000')
})