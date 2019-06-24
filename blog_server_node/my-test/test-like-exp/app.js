const likeExpress = require('../exp-middleware/like-express')
const app = likeExpress()
app.use((req, res, next) => {
    console.log('执行中间件1...')
    next()
})
app.get('/api', (req, res, next) => {
    console.log('get /api')
    // res.json({
    //     data: '/api handle'
    // })
    next()
})
app.get('/api/list', (req, res, next) => {
    console.log('get /api/list')
    res.json({
        data: '/api/list handle'
    })
    next()
})
app.post('/api/add', (req, res, next) => {
    console.log('get /api/add')
    next()
})
app.post('/api/add/blog', (req, res, next) => {
    console.log('get /api/add/blog')
})
app.post('/api/add/blog/x', (req, res, next) => {
    console.log('get api/add/blog/x')
})

app.listen(6300, () => {
    console.log('like-express run success in port 6300...')
})