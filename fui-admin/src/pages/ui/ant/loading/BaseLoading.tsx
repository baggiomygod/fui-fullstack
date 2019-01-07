import * as React from 'react'
import {Spin, Card, Icon} from 'antd'

class BaseLoading extends React.Component{
    public render () {
        const antIcon = <Icon type="loading" style={{fontSize:24}} />
        return (
            <div className="base-loading-wrap">
            <Card title="Spin" bordered={true}>
                <Spin tip="请求中..." size="small" />
                <Spin tip="loading" indicator={antIcon} />
                <Spin tip="保存中..." size="large" />
            </Card>
            </div>
        )
    }
}

export default BaseLoading