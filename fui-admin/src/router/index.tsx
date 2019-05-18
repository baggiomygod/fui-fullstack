import * as React from 'react'
import { 
    HashRouter, 
    // BrowserRouter, 
    Route, Switch, Redirect } from 'react-router-dom'
// import Route from './PrivateRoute'
import * as Cookies from 'js-cookie'

import App from 'src/App/App'
import Layout from 'src/App/app-components/layout/layout'
import DetailLayout from 'src/App/app-components/DetailLayout'
import Home from 'src/pages/home'
import Login from 'src/pages/login'

// import NoMatch from 'src/pages/nonatch'
// UI
import ButtonPage from 'src/pages/ui/ant/button'
import DialogPage from 'src/pages/ui/ant/dialog'
import LoadingPage from 'src/pages/ui/ant/loading'
import NotificationPage from 'src/pages/ui/ant/notification'
import ListPage from 'src/pages/ui/ant/list'
import PicPage from 'src/pages/ui/ant/pic'
import BannerPage from 'src/pages/ui/ant/banners'
import TabsPage from 'src/pages/ui/ant/tabs'
import TipsPage from 'src/pages/ui/ant/tips'

// Form
import LoginPage from 'src/pages/ui/form/login'
import RegPage from 'src/pages/ui/form/regist'
import SearchForm from 'src/pages/ui/form/search'
import dynamicForm from 'src/pages/ui/form/dynamic'

// table
import TablePage from 'src/pages/ui/table/base-table'
import AdvTablePage from 'src/pages/ui/table/adv-table'

// cms
import CarMapPage from 'src/pages/cms/carMap'
import PersonPositionPage from 'src/pages/cms/person/PersonPostionPage'
import PersonPage from 'src/pages/cms/person'
import RichPage from 'src/pages/cms/rich'
import TeamPage from 'src/pages/cms/team'

// blog
import BlogPage from 'src/pages/blog/blogList'

// echarts
import BarPage from 'src/pages/ui/echarts/bar'
import LinePage from 'src/pages/ui/echarts/line'
import PiePage from 'src/pages/ui/echarts/pie'
import GeoPage from 'src/pages/ui/echarts/geo'

// setting
import PermissionPage from 'src/pages/setting/permission'

export default class ERouter extends React.Component<any, {}> {
    public componentWillMount() {
        if(!Cookies.get('authorization')) {
            window.location.href = '#/login'
        }
    }
    public render () {
        // const Router = process.env.NODE_ENV !== 'production' 
        //                 ? BrowserRouter
        //                 : HashRouter  // HashRouter
        const Router = HashRouter
        const adminRouterRender = (): any => (
                <Layout>
                    <Switch>
                        <Route exact={true} path="/home" component={Home}/>
                        <Route exact={true} path="/ui/antd/buttons" component={ButtonPage} />
                        <Route exact={true} path="/ui/antd/dialogs" component={DialogPage} />
                        <Route exact={true} path="/ui/antd/loadings" component={LoadingPage} />
                        <Route exact={true} path="/ui/antd/message" component={NotificationPage} />
                        <Route exact={true} path="/ui/antd/list" component={ListPage} />
                        <Route exact={true} path="/ui/antd/pic" component={PicPage} />
                        <Route exact={true} path="/ui/antd/banners" component={BannerPage} />
                        <Route exact={true} path="/ui/antd/tabs" component={TabsPage} />
                        <Route exact={true} path="/ui/antd/tips" component={TipsPage} />

                        <Route exact={true} path="/ui/form/login" component={LoginPage} />
                        <Route exact={true} path="/ui/form/reg" component={RegPage} />
                        <Route exact={true} path="/ui/form/search" component={SearchForm} />
                        <Route exact={true} path="/ui/form/dynamic" component={dynamicForm} />

                        <Route exact={true} path="/ui/table/basic" component={TablePage} />
                        <Route exact={true} path="/ui/table/high" component={AdvTablePage} />

                        <Route exact={true} path="/cms/rich" component={RichPage} />
                        <Route exact={true} path="/cms/person" component={PersonPage} />
                        <Route exact={true} path="/cms/user" component={TeamPage} />
                        <Route exact={true} path="/cms/carMap" component={CarMapPage} />
                        
                        {/* 博客 */}
                        <Route exact={true} path="/blog/list" component={BlogPage} />

                        <Route exact={true} path="/ui/charts/bar" component={BarPage} />
                        <Route exact={true} path="/ui/charts/pie" component={PiePage} />
                        <Route exact={true} path="/ui/charts/line" component={LinePage} />
                        <Route exact={true} path="/ui/charts/geo" component={GeoPage} />

                        <Route exact={true} path="/permission" component={PermissionPage} />

                        <Redirect to="/home" />
                    </Switch>
                </Layout>
        )
        const CommonPageRender = () => (
            <DetailLayout>
                <Route path="/common/person/position/:id" component={PersonPositionPage} />
            </DetailLayout>
        )
        
        return (
            <Router basename="admin">
                <App>
                    <Switch>
                        <Route path="/common" render={CommonPageRender} />
                        <Route path="/login" component={Login} />
                        <Route path="/" render={adminRouterRender}/>
                    </Switch>
                </App>
            </Router>
        )
    }
}