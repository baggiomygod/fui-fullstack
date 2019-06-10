const { getList, getDetail, createBlog, updateBlog, delBlog } = require('../controller/blog.controller')
const { SuccessModel, ErrorModel } = require('../model/resModel')
    /**
     * 统一的验证登录函数
     * @param {*} req 
     */
const loginCheck = (req) => {
    if (!req.session.username) {
        return new ErrorModel({}, '尚未登录', 404)
    }
}

const handleBlogRouter = async(req, res) => {
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]
    const blogId = req.query.id || ''

    // 检验登录
    const loginCheckResoult = loginCheck(req)
    if (loginCheckResoult) {
        return loginCheckResoult
    }


    // 获取博客列表
    if (method === 'GET' && path === '/api/blog/list') {
        const author = req.query.author || ''
        const title = req.query.title || ''
        const result = await getList(author, title)
        return new SuccessModel(result, '查询成功')
    }

    // 获取博客详情
    if (method === 'GET' && path === '/api/blog/detail') {
        const id = req.query.id || ''
        console.log('id:', id)
        const blogData = await getDetail(id)
        return new SuccessModel(blogData[0], '成功')
    }
    // 新增博客
    if (method === 'POST' && path === '/api/blog/add') {
        // const loginCheckResoult = loginCheck(req)
        // if (loginCheckResoult) {
        //     return loginCheckResoult
        // }
        req.body.author = req.session.username // 创建人
        const data = await createBlog(req.body)
        return new SuccessModel({ id: data.insertId }, '新建成功')
    }
    // 修改博客
    if (method === 'POST' && path === '/api/blog/update') {
        const bolgData = req.body
        const id = blogId
        const result = await updateBlog(id, bolgData)
        if (result.affectedRows > 0) {
            return new SuccessModel({}, '修改成功')
        } else {
            return new ErrorModel('修改失败')
        }
    }

    // 删除
    if (method === 'POST' && req.path === '/api/blog/del') {
        const id = Number(blogId)
        if (isNaN(id)) {
            return new ErrorModel({}, 'id只能是数字', -999)
        }
        if (!id) {
            return new ErrorModel({}, 'id不能为空', -999)
        }
        const {username} = req.session
        const result = await delBlog(id, username)

        if (result.affectedRows > 0) {
            return new SuccessModel({}, '删除成功')
        } else {
            return new ErrorModel({}, '删除失败', -1)
        }
    }
}

module.exports = handleBlogRouter