import * as React from 'react';
import {Table, Popconfirm, Card, message, Modal} from 'antd'
import blogService from 'src/service/blog'
import './index.less'
interface IArticle {
    title?:string
    content?:string
    createtime?:string
    author?:string
}
interface IState {
    articleContent: IArticle
    list: any[]
    loading: boolean
    pagination: any
    articleVisible: boolean
}
class BlogPage extends React.Component{
    public state: IState = {
        list: [],
        loading: false,
        pagination: {},
        articleVisible: false, // 文章详情visible
        articleContent: {
            title: '',
            content: '',
            createtime: '',
            author: ''
        } // 文章详情
    }
    public componentDidMount(){
        this.getTableData()
    }
    /**
     * 获取文章列表
     * @param res 
     */
    public getTableData() {
        // author keywords
        blogService.getBlogList({})
        .then((blogData:any) => {
            if (blogData.code === 0) {
                // const pagination:any = {...this.state.pagination}
                // pagination.total = blogData.total
                this.setState({
                    list: blogData.data,
                    loading: false,
                    pagination: 10
                })
            }
        }).catch((err:any) => {
            console.log(err)
        })
    }
    /**
     * 删除博客
     * @param id 
     * 
     */
    public handleDel(id:string) {
        blogService.delBlog({id})
        .then((res:any) => {
            console.log('删除：', res)
            if (res.code === 0) {
                // this.filterForm.requestList()
                message.success('删除成功')
            } else {
                message.error('删除失败')
            }
        }).catch((err:any) => {
            console.log(err)
        })
    }
    /**
     * 查看详情
     * @param id 
     */
    public viewDetail(id:string) {
        this.setState({
            loading: true
        })
        console.log('查看详情...')
        blogService.getBlogDetail({id})
        .then((res:any) => {
            console.log(res)
            this.setState({
                loading: false,
                articleVisible: true,
                articleContent: res.data
            })
        })
        
    }
    public hanldeCancel = () => {
        this.setState({
            articleVisible: false
        })
    }
    public handleOk = () => {
        this.setState({
            articleVisible: false
        })
    }
    public render () {
       
        const { articleContent, articleVisible, pagination, list, loading } = this.state
        // 表格列
        const columns = [
            {title: 'id', dataIndex: 'id'},
            {title: '标题', dataIndex: 'title'},
            {title: '文章内容', dataIndex: 'content'},
            {title: '创建时间', dataIndex: 'createtime'},
            {title: '作者', dataIndex: 'author'},
            {
                title: '操作',
                render: (test: string, item: any) => {
                    const bindHandleDel = () => {
                        this.handleDel(item.id)
                    }
                    const bindViewDetail = () => {
                        this.viewDetail(item.id)
                    }
                    return (
                        <div className="operate-btns">
                            <a onClick={bindViewDetail}>详情</a>
                            <Popconfirm title="确认删除?" cancelText="取消" okText="确定" onConfirm={bindHandleDel}>
                                <a>删除</a>
                            </Popconfirm>
                        </div>
                    )
                }
            }
        ]
        
        
        return (
            <div className="blog-page-wrap">
                <Card>
                    form...
                    {/* <FilterForm getTableData={bindPropFun} onRef={this.onFilterFormRef}/> */}
                </Card>
                <Card className="content-wrap mt-10">
                    <Table
                        bordered={true}
                        columns={columns}
                        rowKey="id"
                        pagination={pagination}
                        loading={loading}
                        dataSource={list}
                    />
                </Card>
                <Modal title="文章详情"
                        visible={articleVisible}
                        onOk={this.handleOk}
                        onCancel={this.hanldeCancel}
                        okText="确认"
                        cancelText="取消">
                        <section>
                        <h2>{articleContent.title}</h2>
                        <p>{articleContent.content}</p>
                        <div>
                            <span>{articleContent.createtime}</span>
                            <span>{articleContent.author}</span>
                        </div>
                        </section>
                </Modal>
            </div>
        )
    }
}

export default BlogPage