const {getList, getDetail} = require('../controller/blog.controller')
const {SuccessModel, ErrorModel} = require('../model/resModel')
const handleBlogRouter = (req, res) => {
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]
    // 获取博客列表
    if (method === 'GET' && path === '/app/blog/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        const blogData = getList(author, keyword)
        return new SuccessModel(blogData, '查询成功')
    }

    // 获取博客详情
    if (method === 'GET' && path === '/app/blog/detail') {
        const id = req.query.id || ''
        const bolgData = getDetail(id)
        return new SuccessModel(bolgData, '成功')
    }
    // 新增博客
    if (method === 'POST' && path === '/app/blog/add') {
        return {code: 200, msg: '新增博客'}
    }
    // 修改博客
    if (method === 'POST' && path === '/app/blog/update') {
        return {code: 200, msg: '修改博客'}
    }
}

module.exports = handleBlogRouter