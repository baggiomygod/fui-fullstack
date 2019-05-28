const fs = require('fs')
const path = require('path')

console.log('文件执行的目录__dirname:', __dirname)
console.log('node命令执行的目录 process.cwd():', process.cwd())
const fileName = path.resolve(__dirname, 'log.txt')


// 写入文件
const content = '写入xxxx\n'
const opt = {
    flag: 'a' // a: append w:write
}
// 异步
fs.writeFile(fileName, content, opt, (err) => {
    if (err) {
        console.error(err)
    }
})

// 获取文件内容
// 读取文件 readFile异步
fs.readFile(fileName, (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    // 读取的data是二进制类型的，需要转换为字符串
    console.log(data.toString())
})

const file2Name = path.resolve(__dirname, 'log2.txt')
// 判断文件是否存在
fs.exists(file2Name, (exist) => {
    console.log('exist:', exist)
})
