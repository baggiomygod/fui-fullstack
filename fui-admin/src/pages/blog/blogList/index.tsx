import * as React from 'react';
import {Table, Popconfirm, Card} from 'antd'
import blogService from 'src/service/blog'

class BlogPage extends React.Component{
    public state = {
        list: [],
        loading: false,
        pagination: {}
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
        // this.personDetail.getPersonData(id)
        this.setState({
            loading: false
        })
    }
    public render () {
        // const bindPropFun = (list: any[]) => {
        //     this.setState({
        //         loading: true
        //     })
        //     this.getTableData(list)
        // }
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
                                <a href="#">删除</a>
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
                        pagination={this.state.pagination}
                        loading={this.state.loading}
                        dataSource={this.state.list}
                    />
                </Card>
                {/* <PersonDetail onRef={this.onDetailRef} /> */}
            </div>
        )
    }
}

export default BlogPage