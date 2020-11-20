var express = require('express')
var router = express.Router()
const fs = require('fs')
const { SuccessModel, ErrorModel } = require('../../model/resModel')
const cwd = process.cwd() // node启动命令的文件夹地址
// __dirname js文件执行的文件夹地址

const readJsonData = (url) => {
    return new Promise((resolve, reject) => {
        fs.readFile(url, 'utf-8', (err, data) => {
            if (err) {
                reject(err)
                return
            }
            resolve(JSON.parse(data))
        }
    )
  })
}

router.get('/pwa', async (req, res, next) => {
    try {
        const result = await readJsonData(cwd + '/mock/test-list.json')
        if (!result) {
            res.json(new ErrorModel('失败'))
        } else {
           res.json(new SuccessModel({data: result}, '成功'))
        }
    } catch (err) {
        res.json(new ErrorModel(err, '失败'))
        console.log('readFile error:', err)
    }
})

router.get('/cities', async (req, res, next) => {
    try {
        const result = await readJsonData(cwd + '/mock/cities.json')
        if (!result) {
            res.json(new ErrorModel('失败'))
        } else {
           res.json(new SuccessModel(result, '成功'))
        }
    } catch (err) {
        res.json(new ErrorModel(err, '失败'))
        console.log('readFile error:', err)
    }
})

module.exports = router;
