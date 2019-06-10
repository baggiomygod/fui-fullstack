import * as React from 'react'
import {Form, Input, Button, Row, Col} from 'antd'
import { FormComponentProps } from 'antd/lib/form'
const FormItem = Form.Item
import blogService from 'src/service/blog'
import './FilterForm.less'
// interface IArticle extends FormComponentProps {
//     title?: string
//     content?: string
//     author?: string
//     createTime?: string | number
//     id: string | number
// }
interface IFilterFormProps extends FormComponentProps {
    getTableData:any
    onRef: any
}
 
class FilterForm extends React.Component<IFilterFormProps> {
    constructor(props: IFilterFormProps) {
        super(props)
    }
    public componentWillMount () {
        // 进入时默认加载数据
        this.fetchList()
    }
    public componentDidMount () {
        this.props.onRef(this) // 调用父组件onChildRef方法,传入this
    }
    // 重置
    public handleReset() {
        this.props.form.resetFields()
    }
    // 点击搜索
    public handleSubmit = (e: any) => {
        e.preventDefault()
        this.props.form.validateFields((err: any, values: any) => {
            if (!err) {
                this.fetchList()
            }
        })
    }
    // 获取列表数据
    public fetchList = async () => {
        const searchForm:any = this.props.form.getFieldsValue();
        const params = {
            title: searchForm.title || '',
            content: '',
            author: searchForm.author || ''
        }
        const blogData: any = await blogService.getBlogList(params)
            if (blogData.code === 0) {
                this.props.getTableData(blogData)
            }
        }
     public render() {
         const { getFieldDecorator } = this.props.form
        return (
            <Form className="search-form-wrap" onSubmit={this.handleSubmit}>
                <Row gutter={10}>
                    <Col span={6}>
                        <FormItem>
                            {
                                 getFieldDecorator('title', {initialValue: ''})(
                                     <Input placeholder="标题" />
                                 )
                            }
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem>
                            {
                                 getFieldDecorator('author', {initialValue: ''})(
                                     <Input placeholder="作者" />
                                 )
                            }
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem>
                            <Button type="primary" htmlType="submit" icon="search">查询</Button>
                            <Button type="default" style={{ marginLeft: 8 }} onClick={this.handleReset}>重置</Button>
                        </FormItem>
                    </Col>
                    <Col span={6} className="add-blog-item">
                        <FormItem>
                            {this.props.children}
                        </FormItem>
                    </Col>
                </Row>
            </Form>
        )
     }
}

export default Form.create()(FilterForm)