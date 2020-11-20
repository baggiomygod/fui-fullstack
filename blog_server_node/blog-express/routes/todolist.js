const express = require('express')
const router = express.Router()
const { getTodoList, createTodo, updateTodo, delTodo } = require('../controller/todolist.controller')
const { SuccessModel, ErrorModel } = require('../model/resModel')
// const loginCheck = require('../middleware/loginCheck')

/**
 * api/todos/list
 * get
 * 
 */
router.get('/list', async (req, res, next) => {
    const author = req.query.autor || ''
    const title = req.query.title || ''
    const result = await getTodoList(author, title)
    console.log('result:', result)
    result.forEach(item => {
        item.create_time = new Date(item.create_time).toJSON('yyyy-MM-dd')
        item.update_time = new Date(item.update_time).toJSON('yyyy-MM-dd')
    });
    res.json(new SuccessModel(result, '查询成功'))
})

/**
 * api/todos/add
 * post
 */
router.post('/add', async (req, res, next) => {
    // req.body.quthor = req.session.username
    const data = await createTodo(req.body)
    res.json(new SuccessModel({ id: data.insertId }, '创建成功'))
})

/**
 * api/todos/update
 * post
 * {
 *  id: number,
 *  ...
 * }
 */
router.post('/update', async (req, res, next) => {
    const result = await updateTodo(req.body.id, req.body)
    res.json(new SuccessModel(result, '修改成功'))
})

router.post('/del', async (req, res, next) => {
    const id = Number(req.body.id)
    if (!id) {
        res.json(new ErrorModel({}, 'id不能为空', -999))
    }
    if (isNaN(id)) {
        res.json(new ErrorModel({}, 'id只能是数字', -999))
    }
    console.log(req.session)
    const { username } = req.session
    // const { username } = { username: 'admin' }
    const result = await delTodo(id, username)

    res.json(
        result.affectedRows > 0
            ? new SuccessModel({}, '删除成功')
            : new ErrorModel({}, '删除失败', -1)
    )
})

module.exports = router