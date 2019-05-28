// 标准输入输出 
// process.stdin.pipe(process.stdout)

// 输入输入
// const http = require('http')
// const server = http.createServer((req, res) => {
//     if (req.method === 'POST') {
//         console.log('pipe...')
//         req.pipe(res)
//     }
// })
// server.listen(8085)

// 文件拷贝
// const http = require('http')
// const fs = require('fs')
// const path = require('path')

// const file1 = path.resolve(__dirname, 'file1.txt')
// const file2 = path.resolve(__dirname, 'file2.txt')

// const readStream = fs.createReadStream(file1)
// const writeStream = fs.createWriteStream(file2)

// readStream.pipe(writeStream)

// readStream.on('data', chunk => {
//     console.log(chunk.toString())
// })

// readStream.on('end', () => {
//     console.log('')
// })

 const http = require('http')
 const fs = require('fs')
 const path = require('path')

 const file1 = path.resolve(__dirname, 'file1.txt')
 const server = http.createServer((req, res) => {
     if (req.method === 'GET') {
         const readStream = fs.createReadStream(file1)
         readStream.pipe(res)
     }
 })
 server.listen(6500)