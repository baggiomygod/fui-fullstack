/**
 * 需要权限路由
 */
import * as React from 'react'
import { Route, withRouter } from 'react-router-dom';
import * as Cookies from 'js-cookie'
interface IRouterProps {
    replace: any
}

const noPremssionComp = () => {
    const style: any = {
        height: 'calc(77vh)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        fontSize: '40px',
        fontWeight: 500,
        color: 'rgba(252, 94, 94, 0.3)'
    }
    return (<div style={style}>您没有改页面权限</div>)
}
class PrivateRoute extends React.Component<any, {}> {
    public state = {
        // isAuthenticated: window.sessionStorage.getItem("userId") ? true: false
        isAuthenticated: Cookies.get('connect.sid') ? true: false
    }
    constructor(props: IRouterProps) {
        super(props)
    }
    public componentWillMount() {
        // if (!this.state.isAuthenticated) {
        //     // const {history} = this.props
        //     window.location.href = window.location.origin + '#/admin/login'
        //     // history.push("/login");
        // }
    }
    public render () {
        
        const { component: Component, ...rest} = this.props;
        const renderCompnent = (props:any) => ( 
            <React.Component {...props} /> 
        )
        return !this.state.isAuthenticated 
        ? ( <Route {...rest} render={ noPremssionComp }/> )
        : ( <Route {...rest} render={ renderCompnent }/> )
        // return  this.state.isAuthenticated
        //     ? ( <Route {...rest} render={ renderCompnent }/> )
        //     : (<p style = {{"width": "100%", "textAlign": "center", "fontSize": "20px", "lineHeight": "50px"}}>请登录...</p>)
    }
}

export default withRouter(PrivateRoute)