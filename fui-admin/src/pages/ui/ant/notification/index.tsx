import * as React from 'react'
import Notification from './Notification'
import Alert from './Alert'
import Message from './Message'
import './index.less'
class NotifocatePage extends React.Component{
    public render () {
        return (
            <div className="notifocate-page-wrap">
                <Notification />
                <Alert />
                <Message />
            </div>
        )
    }
}

export default NotifocatePage