import Http from 'src/server-http'

export default {
    // 获取文章列表
    getBlogList(params:any = {}) {
        return Http({ url: '/api/blog/list', method: 'get', params })
    },

    // 获取文章列表
    getBlogDetail(params:any = {}) {
        return Http({ url: '/api/blog/detail', method: 'get', params })
    },

    // 新增文章
    addBlog(data:any = {}) {
        return Http({ url: '/api/blog/add', method: 'post', data })
    },

    // 修改文章
    editBlog(data:any = {}) {
        return Http({ url: '/api/blog/update', method: 'post', data, params: { id: data.id } })
    },

    // 删除文章
    delBlog(data:any = {}) {
        return Http({ url: '/api/blog/del', method: 'post', data, params: { id: data.id } })
    },
}