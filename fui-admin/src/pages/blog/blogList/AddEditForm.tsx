import * as React from 'react'
import {Form, Input, Row, Col, Modal} from 'antd'
const FormItem = Form.Item
const { TextArea } = Input
import blogService from 'src/service/blog'
import { FormComponentProps } from 'antd/lib/form';

interface IAddEditForm extends FormComponentProps {
    saveBlog: any
    visible: boolean
    addEditType: string
    hideDialog: any
    content: any
}

class AddEditForm extends React.Component<IAddEditForm> {
    constructor(props: IAddEditForm) {
        super(props)
    }
    public handleSubmit = (e: any) => {
        e.preventDefault()
        this.props.form.validateFields((err: any, values: any) => {
            if (!err) {
                this.saveBlog(values)
            }
        })
    }
    // add update保存
    public saveBlog = async (blogData: any) => {
        const { addEditType, content } = this.props
        const params = {
            title: blogData.title || '',
            content: blogData.content || '',
            id: addEditType === 'add' ? '' : content.id
        }
        const servicename = addEditType === 'add' ? 'addBlog' : 'editBlog'
        const saveResult = await blogService[servicename](params)
        if (saveResult.code === 0) {
            this.props.saveBlog(saveResult)
        }
    }
    // 隐藏add edit弹框
    public hanldeEditCancel = () => {
        this.props.hideDialog()
    }
    public render () {
         const { getFieldDecorator } = this.props.form
         const { visible, addEditType, content } = this.props
         return (
            <Modal title={addEditType === 'add' ? '新增文章' : '编辑文章'}
                width="70%"
                visible={visible}
                onOk={this.handleSubmit}
                onCancel={this.hanldeEditCancel}
                okText="保存"
                cancelText="取消">
                <Form className="add-form-wrap">
                    <Row gutter={10}>
                        <Col span={24}>
                            <FormItem>
                                {
                                    getFieldDecorator(
                                        'title', 
                                        {
                                            initialValue: addEditType === 'add' ? '' : content.title,
                                            rules: [
                                                {
                                                    required:true,
                                                    message:'标题不能为空'
                                                },
                                                {
                                                    min: 1,max:50,
                                                    message:'长度不在范围内'
                                                }
                                            ]
                                        },
                                        )(
                                        <Input placeholder="标题" />
                                    )
                                }
                            </FormItem>
                        </Col>
                        <Col span={24}>
                            <FormItem>
                                {
                                    getFieldDecorator(
                                        'content',
                                        {
                                            initialValue: addEditType === 'add' ? '' : content.content,
                                            rules: [
                                                {
                                                    required:true,
                                                    message:'内容不能为空'
                                                },
                                                {
                                                    min: 1,max: 2000,
                                                    message:'长度不在范围内'
                                                }
                                            ]
                                    })(
                                        <TextArea placeholder="文章内容" autosize={{ minRows: 10, maxRows: 50 }} />
                                    )
                                }
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        )
    }
}

export default Form.create()(AddEditForm)