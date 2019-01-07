import * as React from 'react'
import { Col, Button, Card, Modal } from 'antd'

interface IState {
    asyncVisible: boolean // 异步
    asyncText?: string
    confirmLoading?: boolean
}
interface IProps {
    name?: string
}
class DialogPage extends React.Component {
    constructor(props: IProps, public state: IState) {
        super(props)
        this.showAsyncModal = this.showAsyncModal.bind(this)
        this.handleAsyncOK = this.handleAsyncOK.bind(this)
        this.handleAsyncCancel = this.handleAsyncCancel.bind(this)
    }

    // 异步关闭对话框 
    public showAsyncModal(): void {
        this.setState({
            asyncVisible: true
        })
    }
    public handleAsyncOK(): void {
        this.setState({
            confirmLoading: true,
            asyncText: '点击ok，异步关闭对话框'
        })
        setTimeout(() => {
            this.setState({
                confirmLoading: false,
                asyncVisible: false
            })
        }, 2000)
    }
    public handleAsyncCancel(): void {
        this.setState({
            asyncVisible: false,
            asyncText: '点击取消，关闭对话框'
        })
    }
    public render() {
        return (
            <Col span={24} className="col-item">
                <Card title="异步关闭" bordered={true}>
                    <Button type="primary" onClick={this.showAsyncModal}>open</Button>
                    <Modal title="异步关闭的对话框"
                        visible={this.state.asyncVisible}
                        onOk={this.handleAsyncOK}
                        onCancel={this.handleAsyncCancel}
                        confirmLoading={this.state.confirmLoading}>
                        <p>{this.state.asyncText}</p>
                    </Modal>
                </Card>
            </Col>
        )
    }
}

export default DialogPage