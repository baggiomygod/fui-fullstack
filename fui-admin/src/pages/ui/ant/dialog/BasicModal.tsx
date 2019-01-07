import * as React from 'react'
import { Col, Button, Card, Modal } from 'antd'
interface IState {
    visible: boolean
}
interface IProps {
    name?: string
}
class BasicModal extends React.Component {
    constructor(props: IProps, public state: IState) {
        super(props)
        this.showBaseModal = this.showBaseModal.bind(this)
        this.handleOK = this.handleOK.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }
    public showBaseModal(): void {
        this.setState({
            visible: true
        })
    }
    public handleOK(): void {
        this.setState({
            visible: false
        })
    }
    public handleCancel(): void {
        this.setState({
            visible: false,
        })
    }

    public render() {
        return (
            <Col span={24} className="col-item">
                <Card title="弹窗" bordered={true}>
                    <Button type="primary" onClick={this.showBaseModal}>open</Button>
                    <Modal title="basic modal"
                        visible={this.state.visible}
                        onOk={this.handleOK}
                        onCancel={this.handleCancel}
                        okText="确认"
                        cancelText="取消"
                        cancelButtonProps={{disabled: true}}>
                        <p>test...</p>
                        <p>test...</p>
                        <p>test...</p>
                        <p>test...</p>
                    </Modal>
                </Card>
            </Col>
        )
    }
}

export default BasicModal