import * as React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom';
import {connect} from 'react-redux'

import Home from '../views/home';

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
            <HashRouter>
              <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route exact={true} path="/home" component={Home} />
              </Switch>
            </HashRouter>
        )
    }
}

export default connect()(Main)
