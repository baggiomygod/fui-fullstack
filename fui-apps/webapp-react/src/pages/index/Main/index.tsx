import * as React from 'react'
import {connect} from 'react-redux' // ?
import {addTodo} from '../store/action/tabAction';

interface IProps {
    num: number;
    dispatch: any
}
class Main extends React.Component<IProps> {
    constructor (props: any) {
        super(props)
    }
    public componentDidMount () {
        console.log('main...')
    }
    public add = () => {
        this.props.dispatch(addTodo({
            num: 1
        }))
    }
    public render () {
        const num: number = this.props.num
        return (
            <div onClick={this.add}>main...{num}</div>
        )
    }
}

export default connect(
    (state: any) => ({
        num: state.tabReducer.num // 该组件中通过this.props.num 获取
    })
)(Main)