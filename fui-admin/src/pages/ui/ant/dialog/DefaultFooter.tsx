import * as React from 'react'
import { Col, Button, Card, Modal } from 'antd'
interface IState {
    visible: boolean
}
interface IProps {
    name?: string
}
class DefaultFooter extends React.Component {
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
                <Card title="自定义页脚" bordered={true}>
                    <Button type="primary" onClick={this.showBaseModal}>open</Button>
                    <Modal title="basic modal"
                        visible={this.state.visible}
                        footer={[
                            <Button key="back" onClick={this.handleCancel}>cancel</Button>,
                            <Button key="submit" type="primary" onClick={this.handleOK}>submit</Button>
                        ]}>
                        <p>test...</p>
                        <p>test...</p>
                    </Modal>
                </Card>
            </Col>
        )
    }
}

export default DefaultFooter