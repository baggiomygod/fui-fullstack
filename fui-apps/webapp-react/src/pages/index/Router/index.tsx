import * as React from 'react'
import { Route, withRouter, Switch, HashRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import Home from '../Home/Home';
import My from '../My/My';
import Search from '../Search/Search';
import Layout from '../Layout';

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
        // main
        const mainRouterRender = (): any => (
          <Layout>
              <Route exact={true} path="/home" component={Home} />
              <Route exact={true} path="/user" component={My} />
          </Layout>
        )
        // common
        // const CommonPageRender = () => (
        //   <Route exact={true} path="/search" component={Search} />
        // )
        return (
            <HashRouter>
              <Switch>
                {/* <Route path="/common" render={CommonPageRender} /> */}
                <Route exact={true} path="/search" component={Search} />
                <Route path="/" render={mainRouterRender} />
              </Switch>
            </HashRouter>
        )
    }
}

export default withRouter<any>(connect()(Main))
