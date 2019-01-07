import * as React from 'react'
import { Row} from 'antd'

import BasicModal from './BasicModal'
import AsyncModal from './AsyncClose'
import DefaultFooter from './DefaultFooter'

import './index.less'
interface IProps {
    name?: string
}
class DialogPage extends React.Component{
    constructor(props: IProps) {
        super(props)
    }
    public render () {
        return (
            <div className="dialog-page-wrap">
                {/* 这里gutter={16} 样式没生效 */}
                <Row gutter={16}>
                    <BasicModal />
                    <AsyncModal />
                    <DefaultFooter />
                </Row>
            </div>
        )
    }
}

export default DialogPage