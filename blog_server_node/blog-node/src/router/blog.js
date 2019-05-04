const {getList, getDetail, createBog, updateBlog, delBlog} = require('../controller/blog.controller')
const {SuccessModel, ErrorModel} = require('../model/resModel')
const handleBlogRouter = (req, res) => {
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]
    const blogId = req.query.id || ''
    // 获取博客列表
    if (method === 'GET' && path === '/api/blog/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        const blogData = getList(author, keyword)
        return new SuccessModel(blogData, '查询成功')
    }

    // 获取博客详情
    if (method === 'GET' && path === '/api/blog/detail') {
        const id = req.query.id || ''
        const bolgData = getDetail(id)
        return new SuccessModel(bolgData, '成功')
    }
    // 新增博客
    if (method === 'POST' && path === '/api/blog/add') {
        const blogData = req.body
        const data = createBog(blogData)
        return new SuccessModel(data, '新建成功')
    }
    // 修改博客
    if (method === 'POST' && path === '/api/blog/update') {
        const bolgData = req.body
        const id = blogId
        const result = updateBlog(id, bolgData)
        if (result) {
            return new SuccessModel(result, '修改成功')
        } else {
            return new ErrorModel('修改失败')
        }
    }

    if (method === 'POST' && req.path === '/api/blog/del') {
        const result = delBlog(blogId)
        if (result) {
            return new SuccessModel(result, '删除成功')
        } else {
            return new ErrorModel('修改失败')
        }
    }
}

module.exports = handleBlogRouter