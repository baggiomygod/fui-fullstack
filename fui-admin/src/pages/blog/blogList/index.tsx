import * as React from 'react';
import {Table, Popconfirm, Card, message, Button} from 'antd'
import FilterForm from './FilterForm'
import AddEditForm from './AddEditForm'
import blogService from 'src/service/blog'
import './index.less'
interface IArticle {
    title?:string
    content?:string
    create_time?:string
    author?:string
}
interface IState {
    name?: string,
    articleContent: IArticle
    addEditVisible: boolean
    addEditType: string
    list: any[]
    loading: boolean
    pagination: any
    articleVisible: boolean
}
class BlogPage extends React.Component{
    public childRef:any = React.createRef();
    public state: IState = {
        name: 'blog list',
        list: [],
        loading: false,
        pagination: {},
        articleVisible: false, // 文章详情visible
        addEditVisible: false,
        addEditType: 'add',
        articleContent: {
            title: '',
            content: '',
            create_time: '',
            author: ''
        } // 文章详情
    }
    
    public componentWillMount () {
        // this.getTableData()
    }
    public componentDidMount(){
        // this.getTableData()
    }
     // 将子组件对象赋值给this.childRef
     // 子组件this.props.onRef(this) this为子组件（这里的child）
     public onChildRef = (child:any) => {
        this.childRef = child
    }
    /**
     * 获取文章列表
     * @param res 
     */
    public getTableData(res: any) {
        this.setState({
            list: res.data
        })
    }
    // 刷新列表
    public refreshTable = () => {
        this.childRef.fetchList()
    }
    /**
     * 新增修改 保存文章
     */
    public saveBlog = (blogData: any) => {
        this.setState({
            addEditVisible: false
        }, () => {
            this.refreshTable()
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
            if (res.code === 0) {
                this.refreshTable()
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
        blogService.getBlogDetail({id})
        .then((res:any) => {
            this.setState({
                loading: false,
                addEditVisible: true,
                addEditType: 'edit',
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

    /**
     * 新增弹框
     */
    public showAddEditDialog = () => {
        this.setState({
            addEditType: 'add',
            addEditVisible: true
        })
    }
    // hide add edit弹框
    public hideAddEdit = () => {
        this.setState({
            addEditVisible: false
        })
    }
    
    public render () {
        const { 
            articleContent,
            pagination,
            list,
            loading,
            addEditType,
            addEditVisible
        } = this.state
        const bindPropFun = (listData: any[]) => {
            this.setState({
                loading: true
            })
            this.getTableData(listData)
            this.setState({
                loading: false
            })
        }
        // 表格列
        const columns = [
            {title: 'id', dataIndex: 'id'},
            {title: '标题', dataIndex: 'title'},
            {
                title: '文章内容',
                dataIndex: 'content',
                render(contentStr: string){ // 反转义特殊符号
                    let temp: any = document.createElement("div"); 
                    temp.innerHTML = contentStr; 
                    const output = temp.innerText || temp.textContent; 
                    temp = null; 
                    return output;
             }},
            {title: '创建时间', dataIndex: 'create_time'},
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
                    <FilterForm getTableData={bindPropFun} onRef={this.onChildRef}>
                        <Button type="primary" onClick={this.showAddEditDialog} icon="plus">新增</Button>
                    </FilterForm>
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
                <AddEditForm saveBlog={this.saveBlog}
                    visible={addEditVisible}
                    addEditType={addEditType}
                    hideDialog={this.hideAddEdit}
                    content={articleContent} />
            </div>
        )
    }
}

export default BlogPage