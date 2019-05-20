const {exec} = require('../db/mysql')
/**
 * 获取列表
 * @param {*} author 
 * @param {*} keyword 
 */
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
/**
 * 获取详情
 * @param {*} id 
 */
const getDetail = (id) => {
    const sql = `select * from blogs where id='${id}'`
    return exec(sql)
}
/**
 * 新建博客
 * @param {*} blogData 
 */
const createBlog = (blogData = {}) => {
    // blogData 是一个博客对象
    console.log('blogData:', blogData)
    const {title, content, author} = blogData
    const createTime = Date.now()
    const sql = `
    insert into blogs (title, content, author, createtime) 
    values ('${title}', '${content}', '${author}', '${createTime}')
    `
    return exec(sql)
}

/**
 * 更新博客
 * @param {*} id 
 * @param {*} blogData 
 */
const updateBlog = (id, blogData = {}) => {
    console.log('id:', id)
    console.log('blogData:', blogData)
    const {title, content, author} = blogData
    const updatetime = Date.now()
    // update users set realname='abc' where username='fan1130';
    let updateSql = ''
    updateSql += title ? `title='${title}',` : '' 
    updateSql += content ? `content='${content}',` : '' 
    updateSql += author ? `author='${author}',` : '' 
    const sql = `
        update blogs set ${updateSql.substring(0, updateSql.length - 1)} where id=${id}
    `
    return exec(sql)
}

/**
 * 删除
 * @param {*} id 
 */
const delBlog = (id, author) => {
    // delete from users where username='fan1130'
    const sql = `delete from blogs where id='${id}' and author='${author}'`
    console.log('del sql:', sql)
    return exec(sql)
}
module.exports = {
    getList,
    getDetail,
    createBlog,
    updateBlog,
    delBlog
}