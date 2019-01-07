import * as React from 'react'
import { Route, withRouter } from 'react-router-dom';
import * as Cookies from 'js-cookie'
interface IRouterProps {
    replace: any
}
class PrivateRoute extends React.Component<any, {}> {
    public state = {
        // isAuthenticated: window.sessionStorage.getItem("userId") ? true: false
        isAuthenticated: Cookies.get('authorization') ? true: false
    }
    constructor(props: IRouterProps) {
        super(props)
    }
    public componentWillMount() {
        if (!this.state.isAuthenticated) {
            const {history} = this.props
            history.replace("/login");
        }
    }
    public render () {
        const { component: Component, ...rest} = this.props;
        const renderCompnent = (props:any) => ( 
            <React.Component {...props} /> 
        )
        return ( <Route {...rest} render={ renderCompnent }/> )
        // return  this.state.isAuthenticated
        //     ? ( <Route {...rest} render={ renderCompnent }/> )
        //     : (<p style = {{"width": "100%", "textAlign": "center", "fontSize": "20px", "lineHeight": "50px"}}>请登录...</p>)
    }
}

export default withRouter(PrivateRoute)