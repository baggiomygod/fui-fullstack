import * as React from 'react'
import {Spin, Alert, Switch, Card} from 'antd'
interface IState {
    loading: boolean
}
interface Iprops{
    name?: string
}
class ControlLoading extends React.Component{
    public state: IState = {
        loading: false
    }
    constructor(props: Iprops) {
        super(props)
        this.toggle = this.toggle.bind(this)
    }
    public toggle(val:boolean) {
        this.setState({
            loading: val
        })
    }
    public render () {
        return (
            <div className="card-loading-wrap">
            <Card title="卡片中加载+控制显示" bordered={true}>
                <div className="control-state" style={{marginTop: 16}}>
                    Loading state: 
                    <Switch checked={this.state.loading} 
                            onChange={this.toggle}
                    />
                </div>
                <Spin spinning={this.state.loading}>
                    <Alert message="alert message title"
                           description="description...description...description..."
                           type="info" />
                </Spin>
            </Card>
            </div>
        )
    }
}

export default ControlLoading