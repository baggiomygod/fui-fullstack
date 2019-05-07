const {exec} = require('../db/mysql')
const getList = (author, keyword) => {
    let sql = `select * from blogs where 1=1 ` // 1=1永远成立，防止后面没值报错
    if (author) {
        sql += `and author='${author}' `
    }
    if (keyword) {
        sql += `and title like '%${keyword}%'`
    }
    sql += `order by createtime desc;`
    return exec(sql)
}

const getDetail = (id) => {
    return {id:1, title: '标题', content: 'xxxx', createTime: '2019-02-02 19:11:11', author: 'wf'}
}
const createBog = (blogData = {}) => {
    // blogData 是一个博客对象
    console.log('blogData:', blogData)
    return {
        id: 1
    }
}

const updateBlog = (id, blogData = {}) => {
    console.log('id:', id)
    console.log('blogData:', blogData)
    return true
}

const delBlog = (id) => {
    return true
}
module.exports = {
    getList,
    getDetail,
    createBog,
    updateBlog,
    delBlog
}