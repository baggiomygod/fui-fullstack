/**
 * 逐行读取
 * node readline.js
 */

 const fs = require('fs')

 const path = require('path')
 const readline = require('readline')

 // 文件名
 const fileName = path.join(__dirname, '../', '../', 'logs', 'access.log')

 // 创建readStream

 const readStream = fs.createReadStream(fileName)

 // 创建readline对象

 const readLine = readline.createInterface({
     input: readStream
 })

 let chromeNum = 0
 let total = 0

 readLine.on('line', lineData => {
     if (!lineData) {
         return
     }

     total++
     const arr = lineData.split(' -- ')
     if (arr[2] && arr[2].indexOf('Chrome') > 0) {
        //  累加chrome数量
        chromeNum++
     }
 })
// 监听读取完成
 readLine.on('close', () => {
    console.log('cheome 占比：', chromeNum / total)
 })