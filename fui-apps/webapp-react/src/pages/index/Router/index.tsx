import * as React from 'react'
import { Route, withRouter, Switch, HashRouter, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import Home from '../Home/Home';
import Todolist from '../Todolist';
import Test from '../test';
import My from '../My/My';
import WebList from '../WebList/WebList';
import Login from '../Login';
import Search from '../Search/Search';
import Layout from '../Layout';
import CreateArticle from '../CreateArticle/CreateArticle';
// Hooks
import ArticleDetail from '../ArticleDetail'
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
              <Route exact={true} path="/todolist" component={Todolist} />
              <Route exact={true} path="/test" component={Test} />
              <Route exact={true} path="/user" component={My} />
              <Route exact={true} path="/web_list" component={WebList} />
              <Route exact={true} path="/article_detail" component={ArticleDetail} />
              <Redirect to="/web_list" />
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
                <Route exact={true} path="/login" component={Login} />
                <Route exact={true} path="/search" component={Search} />
                <Route exact={true} path="/create_article" component={CreateArticle} />
                <Route path="/" render={mainRouterRender} />
              </Switch>
            </HashRouter>
        )
    }
}

export default withRouter<any, any>(connect()(Main))
