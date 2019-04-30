const getList = (author, keyword) => {
    // mock 正确格式的数据
    return [
        {id:1, title: '标题', content: 'xxxx', createTime: '2019-02-02 19:11:11', author: 'wf'},
        {id:2, title: '标题', content: 'xxxx', createTime: '2019-02-02 19:11:11', author: 'wf'},
        {id:3, title: '标题', content: 'xxxx', createTime: '2019-02-02 19:11:11', author: 'wf'},
        {id:4, title: '标题', content: 'xxxx', createTime: '2019-02-02 19:11:11', author: 'wf'},
        {id:5, title: '标题', content: 'xxxx', createTime: '2019-02-02 19:11:11', author: 'wf'},
        {id:6, title: '标题', content: 'xxxx', createTime: '2019-02-02 19:11:11', author: 'wf'}
    ]
}

const getDetail = (id) => {
    return {id:1, title: '标题', content: 'xxxx', createTime: '2019-02-02 19:11:11', author: 'wf'}
}
module.exports = {
    getList,
    getDetail
}