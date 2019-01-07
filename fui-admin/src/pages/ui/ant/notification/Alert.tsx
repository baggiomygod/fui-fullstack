import * as React from 'react'
import {Alert, Card} from 'antd'
interface IProps {
    name?:string
}

class AlertPage extends React.Component{
    constructor(props: IProps) {
        super(props)
    }

    // onClick={handler} // 方法不是void类型的 ”不能写括号“，否则会报错，类型不匹配：Types of property 'onClick' are incompatible.
    // 标签里使用() => {}会报错：Lambdas are forbidden in JSX attributes due to their rendering performance impact
    // 解决 使用bind传递参数
    public render () {
        return (
            <div className="alert-page-wrap">
                <Card title="alert">
                    <Alert message="Success Text" type="success" />
                    <Alert message="info Text" type="info" />
                    <Alert message="warning Text" type="warning" />
                    <Alert message="error Text" type="error" />
                </Card>
            </div>
        )
    }
}

export default AlertPage