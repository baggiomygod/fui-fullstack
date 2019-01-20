import * as React from 'react'
import BottomBar from '../BottomBar/BottomBar';
import { Route, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import Home from '../Home/Home';

interface IProps {

    dispatch?: any
}
class Main extends React.Component<IProps> {
    constructor (props: any) {
        super(props)
    }
    public componentDidMount () {
        console.log('main...')
    }
    public render () {
        return (
            <div>
                <Route exact={true} path="/home" component={Home} />
                <BottomBar />
            </div>
        )
    }
}

export default withRouter<any>(connect()(Main))
