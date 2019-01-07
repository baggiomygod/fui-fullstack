const fs = require('fs')
const path = require('path')
const srcRoot = path.resolve(__dirname, '../src')
const pageDir = path.resolve(srcRoot, 'pages')
function getEntry(pageDir) {
    let entryMap = {}
    // 同步读取文件
    fs.readdirSync(pageDir)
        .forEach(pathname => {
            console.log('pathname:', pathname)
            let fullPathName = path.resolve(pageDir, pathname)
            let stat = fs.statSync(fullPathName) // 判断文件 or  文件夹
            let indexJs = path.resolve(fullPathName, 'index.js')
            // fullPathName是文件夹 && 有index.js文件 
            if (stat.isDirectory() && fs.existsSync(indexJs)) {
                entryMap[pathname] = indexJs // 设置每页页面的如何文件为：index.js
            }
        })
        return entryMap
}

getEntry(pageDir)