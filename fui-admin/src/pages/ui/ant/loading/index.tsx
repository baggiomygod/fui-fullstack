import * as React from 'react'
import BaseLoading from './BaseLoading'
import ControlLoading from './ControlLoading'
import './index.less'
class LoadingPage extends React.Component{
   
    public render () {
        return (
            <div className="loading-page-wrap">
                <BaseLoading />
                <ControlLoading />
            </div>
        )
    }
}

export default LoadingPage