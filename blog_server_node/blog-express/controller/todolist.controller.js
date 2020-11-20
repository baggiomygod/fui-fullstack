const xss = require('xss')
const { exec } = require('../db/mysql')

/**
 * 获取todo list 列表
 * @param {*} author 
 * @param {*} title 
 * @param {*} order
 */
const getTodoList = (author, title, order) => {
    let sql = 'select * from todolist where 1=1 '
    if (author) {
        sql += `and author='${author}'`
    }
    if (title) {
        sql += `and title like '%${title}%'`
    }

    sql += `order by ${!order ? 'create_time' : order} desc;`
    console.log('get todo list sql:', sql)
    return exec(sql)
}

/**
 * 新建todo
 * @param {*} todoData 
 */
const createTodo = (todoData = {}) => {
    const { title, content, start_time, finish_time, author } = todoData
    const sql = `
        insert into todolist (title, content, start_time, finish_time, username)
        values ('${xss(title)}', '${xss(content)}', '${xss(start_time)}', '${xss(finish_time)}', '${xss(author)}')
    `
    return exec(sql)
}


/**
 * 更新todo
 * @param {*} id 
 * @param {*} blogData 
 */
const updateTodo = (id, todoData = {}) => {
    const { title, content, start_time, finish_time, author } = todoData
    let updateSql = ''
        updateSql += title ? `title='${title}',` : ''
        updateSql += content ? `content='${content}',` : ''
        updateSql += author ? `username='${author}',` : ''
        updateSql += start_time ? `start_time='${start_time}',` : ''
        updateSql += finish_time ? `finish_time='${finish_time}',` : ''
    
        const sql = `update todolist set ${updateSql.substring(0, updateSql.length - 1)} where id=${id};`
        return exec(sql)
}

/**
 * 删除todo
 * @param {*} id 
 * @param {*} author 
 */
const delTodo = (id, author) => {
    const sql = `delete from todolist where id='${id}' and username='${author}'`
    return exec(sql)
}
module.exports = {
    getTodoList,
    createTodo,
    updateTodo,
    delTodo
}