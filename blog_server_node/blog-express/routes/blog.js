var express = require('express');
var router = express.Router();
const { getList, getDetail, createBlog, updateBlog, delBlog } = require('../controller/blog.controller')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const loginCheck = require('../middleware/loginCheck')
// 获取列表
router.get('/list', async (req, res, next) => {
    const author = req.query.autor || ''
    const title = req.query.title || ''
    const result = await getList(author, title)
    res.json(new SuccessModel(result, '查询成功'))
});

// 获取详情
router.get('/detail', async (req, res, next) => {
    const id = req.query.id || ''
    const blogData = await getDetail(id)
    res.json(new SuccessModel(blogData[0], '成功'))
});

// 新增
router.post('/add', loginCheck, async (req, res, next) => {
    // req.body.author = req.session.username
    console.log('add:', req.body)
    const data = await createBlog(req.body)
    res.json(new SuccessModel({ id: data.insertId }, '创建成功'))
});

// 更新
router.post('/update', loginCheck, async (req, res, next) => {
    const blogData = req.body
    const result = await updateBlog(blogData.id, blogData)
    if (result.affectedRows > 0) {
        res.json(
            new SuccessModel({}, '修改成功')
        )
    } else {
        res.json(
            new ErrorModel('修改失败')
        )
    }
});

// 删除
router.post('/del', loginCheck, async (req, res, next) => {

    const id = Number(req.body.id)
    if (!id) {
        res.json(new ErrorModel({}, 'id不能为空', -999))
    }
    if (isNaN(id)) {
        res.json(new ErrorModel({}, 'id只能是数字', -999))
    }
    const {username} = {username: 'admin'} // req.session
    const result = await delBlog(id, username)
    // const result = await delBlog(id, username)
    
    res.json(
        result.affectedRows > 0
            ? new SuccessModel({}, '删除成功')
            : new ErrorModel({}, '删除失败', -1)
    )
});

module.exports = router;
