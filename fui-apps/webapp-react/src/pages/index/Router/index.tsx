import * as React from 'react'
import { Route, withRouter, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import Home from '../views/Home/Home';
import Todolist from '../views/Todolist';
import My from '../views/My/My';
import WebList from '../views/WebList/WebList';
import WebVR from '../views/WebVR/WebVR';
import Login from '../views/Login';
import Search from '../views/Search/Search';
import Layout from '../views/Layout';
import CreateArticle from '../views/CreateArticle/CreateArticle';
// Hooks
import ArticleDetail from '../views/ArticleDetail'
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
              <Route exact={true} path="/user" component={My} />
              <Route exact={true} path="/web_list" component={WebList} />
              <Route exact={true} path="/web_vr" component={WebVR} />
              <Route exact={true} path="/article_detail" component={ArticleDetail} />
              <Redirect to="/web_list" />
          </Layout>
        )
        // common
        // const CommonPageRender = () => (
        //   <Route exact={true} path="/search" component={Search} />
        // )
        return (
            <BrowserRouter>
              <Switch>
                {/* <Route path="/common" render={CommonPageRender} /> */}
                <Route exact={true} path="/login" component={Login} />
                <Route exact={true} path="/search" component={Search} />
                <Route exact={true} path="/create_article" component={CreateArticle} />
                <Route path="/" render={mainRouterRender} />
              </Switch>
            </BrowserRouter>
        )
    }
}

export default withRouter<any, any>(connect()(Main))
