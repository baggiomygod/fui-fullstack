import * as React from 'react'
import { Row, Col, Card, Button, Radio, Icon } from 'antd'
import './index.less'

interface IState {
    size: any
}
interface IProps {
    block: boolean
}
class ButtonPage extends React.Component<IProps>{
    constructor(props: IProps, public state: IState) {
        super(props)
        this.state = {
            size: 'large'
        }
        this.handleSizeChange = this.handleSizeChange.bind(this)
    }
    public handleSizeChange(e:any):void {
        this.setState({
            size: e.target.value
        })
    }
    public render () {
        const size = this.state.size
        return (
            <div className="btn-page-wrap">
                <Row gutter={16}>
                    <Col span={24}>
                        <Card title="基础按钮" bordered={true}>
                            <Button disabled={true}>default</Button>
                            <Button type="primary">primary</Button>
                            <Button type="dashed">dashed</Button>
                            <Button type="danger">danger</Button>

                            <Button shape="circle" icon="poweroff"/>
                            <Button shape="circle" icon="loading"/>
                            <Button type="primary" shape="circle" icon="search" />
                            <Button type="primary" icon="search">search</Button>
                            <Button icon="download">download</Button>
                            <div style={{padding: '8px 8px 0 8px', backgroundColor:'rgb(190,200,200)'}}>
                                <Button ghost={true}>Ghost</Button>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Card title="按钮尺寸" bordered={true}>
                            <Radio.Group value={size} onChange={this.handleSizeChange}>
                                <Radio.Button value="large">large</Radio.Button>
                                <Radio.Button value="default">default</Radio.Button>
                                <Radio.Button value="small">small</Radio.Button>
                            </Radio.Group>
                            <br/>
                            <Button size={size}>default</Button>
                            <Button type="primary" size={size}>primary</Button>
                            <Button.Group size={size}>
                                <Button type="primary"><Icon type="left" />backward</Button>
                                <Button type="primary">forward<Icon type="right" /></Button>
                            </Button.Group>
                            
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Card title="block按钮" bordered={true}>
                            <div>
                                <Button  block={true}>default</Button>
                                <Button type="primary" block={true}>primary</Button>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ButtonPage