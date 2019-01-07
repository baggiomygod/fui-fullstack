import * as React from 'react'
import './index.less'

interface IProps {
    match?: any
}
export default class Home extends React.Component<IProps> {
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