const http = require('http')
const querystring = require('querystring')

// const server = http.createServer((req, res) => {
//     const url = req.url
//     req.query = querystring.parse(url.split('?')[1])
//     res.end(JSON.stringify(req.query))
// })

const server = http.createServer((req, res) => {
    const url = req.url
    const path = url.split('?')[0]
    const query = url.split('?')[1]
    if (req.method === 'POST') {
        // 数据格式
        console.log(('req content-type:', req.headers['content-type']))
        // 接收数据
        let postData = ''
        req.on('data', chunk => {
            postData += chunk.toString()
        })
        req.on('end', () => {
            console.log('postData:', postData)
            // 设置返回数据的格式为json
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({
                query,
                path
            }))
        })
    }
})

server.listen(2000)