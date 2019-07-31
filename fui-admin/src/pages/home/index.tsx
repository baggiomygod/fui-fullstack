import * as React from 'react'
// import { withRouter } from "react-router-dom";
// import { RouteComponentProps } from 'react-router-dom'
import './index.less'

interface IProps {
    id?: string
    match?: string
}
class Home extends React.Component<IProps> {
    constructor(props:IProps) {
        super(props)
    }
    public componentDidMount() {
        // react-router match 获取url上的参数
        console.log('url 参数:', this.props.match) 
    }
    public render () {
        return (
            <div className="home-wrap">
                欢迎使用, XXX管理系统
            </div>
        )
    }
}

export default Home