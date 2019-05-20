import * as React from 'react'
import { Button, message, Card } from 'antd'
interface IProps {
    name?: string
}
// message.config({
//     top: 200, // 距离顶部位置
//     duration: 3, // 延迟时间
//     maxCount: 3, // 最大显示数
//   });
class MessagePage extends React.Component {
    constructor(props: IProps) {
        super(props)
        this.openMessage = this.openMessage.bind(this)
    }
    public openMessage(type: string, msg?: string, duration?: number | undefined ):void {
        if (type === 'loading') {
            message.loading(msg, duration)
                // .then(message.success('success', 2))  // 使用then是onClose回调传入也报错
            return
        }
        message[type](msg, duration)
        
    }

    public render() {
        return (
            <div className="message-page-wrap">
                <Card title="message">
                    <Button type="primary" onClick={this.openMessage.bind(this, 'success', '成功')}>success Message</Button>
                    <Button type="primary" onClick={this.openMessage.bind(this, 'warning', '警告')}>warning Message</Button>
                    <Button type="primary" onClick={this.openMessage.bind(this, 'error', '错误')}>error Message</Button>
                    <Button type="primary" onClick={this.openMessage.bind(this, 'loading', '加载中...', 5)}>loading Message</Button>
                </Card>
            </div>
        )
    }
}

export default MessagePage