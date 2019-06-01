const fs = require('fs')
const path = require('path')
module.exports = {
    // 遍历page文件夹，获取设置entry
    getEntry(pageDir, IndexJsFile) {
        let entryMap = {}
        // 同步读取文件
        fs.readdirSync(pageDir)
            .forEach(pathname => {
                let fullPathName = path.resolve(pageDir, pathname)
                let stat = fs.statSync(fullPathName) // 判断文件 or  文件夹
                let indexJs = path.resolve(fullPathName, IndexJsFile)
                // fullPathName是文件夹 && 有index.js文件 
                if (stat.isDirectory() && fs.existsSync(indexJs)) {
                    entryMap[pathname] = indexJs // 设置每页页面的如何文件为：index.js
                }
            })
            return entryMap
    },
    getHtmlArray (entryMap, pageDir, HTMLPlugin) {
        const htmlArray = []
        Object.keys(entryMap).forEach(key => {
            let fullPathName = path.resolve(pageDir, key)
            let fileName = path.resolve(fullPathName, key + '.html') 

            if (fs.existsSync(fileName)) {
                htmlArray.push(new HTMLPlugin({
                    filename: key + '.html',
                    template: fileName,
                    chunks: ['vendor', key] // script引入的.js
                }))
            }
        })
        return htmlArray
    }
}