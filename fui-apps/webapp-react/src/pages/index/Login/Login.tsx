import * as React from 'react'
import {ImgIcon} from 'src/fui'
import {connect} from 'react-redux'
import { doLogin, loginTest } from 'src/pages/index/store/action/userAction'
import './Login.styl'
/**
 * @constructor <Home />
 * @description 首页
 */
interface IProps {
  dispatch: any
  test?: string
}
class Login extends React.Component<IProps> {
    public state = {
      userDetail: {
        avatar: '',
        name: 'baggio',
        completion: '70%',
        city: '杭州'
      }
    }
    constructor (props: any) {
        super(props)
    }
    public login = () => {
      const params = {
        username: 'admin',
        password: '123456'
      }
      this.props.dispatch(doLogin(params))
    }
    public handleLoginTest = () => {
      this.props.dispatch(loginTest())
    }
    public render () {
      const {userDetail} = this.state
        return (
            <div className="login-container">
              <div className="login-box">
                <ImgIcon src={userDetail.avatar}
                        size={'large'}
                        shape="circle" />
                {/* <form className="auth-form"> */}
                  <div className="username-row">
                    <input type="text" name="username" className="username-ipt" placeholder="用户名" />
                  </div>
                  <div className="username-row">
                    <input type="password" name="password" className="password-ipt" placeholder="密码" />
                  </div>
                  <div className="login-btn">
                    <button onClick={this.login}>登录</button>
                    <button onClick={this.handleLoginTest}>test</button>
                  </div>
                {/* </form> */}
              </div>
            </div>
        )
    }
}

export default connect(
  (state: any) => ({
    userInfo: state.userReducer.userInfo,
    loginTestData: state.userReducer.loginTestData
  }))(Login)
