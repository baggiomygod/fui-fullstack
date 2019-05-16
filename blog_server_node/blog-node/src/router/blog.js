const { getList, getDetail, createBlog, updateBlog, delBlog } = require('../controller/blog.controller')
const { SuccessModel, ErrorModel } = require('../model/resModel')
    /**
     * 统一的验证登录函数
     * @param {*} req 
     */
const loginCheck = (req) => {
    if (!req.session.username) {
        console.log('error...')
        return new ErrorModel({}, '尚未登录')
    }
}

const handleBlogRouter = async(req, res) => {
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]
    const blogId = req.query.id || ''
    const loginCheckResoult = loginCheck(req)

    // 检验登录
    if (loginCheckResoult) {
        return loginCheckResoult
    }

    // 获取博客列表 
    if (method === 'GET' && path === '/api/blog/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        const result = await getList(author, keyword)
        return new SuccessModel(result, '查询成功')
    }

    // 获取博客详情
    if (method === 'GET' && path === '/api/blog/detail') {
        const id = req.query.id || ''
        const blogData = await getDetail(id)[0]
        return new SuccessModel(blogData, '成功')
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
        const result = await delBlog(blogId, req.body)
        if (result.affectedRows > 0) {
            return new SuccessModel({}, '删除成功')
        } else {
            return new ErrorModel('修改失败')
        }
    }
}

module.exports = handleBlogRouter