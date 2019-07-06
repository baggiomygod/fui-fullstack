import * as React from 'react'
import {ImgIcon} from 'src/fui'
import {connect} from 'react-redux'
import { doLogin, loginTest, ListTest } from 'src/pages/index/store/action/userAction'
import './Login.styl'
/**
 * @constructor <Home />
 * @description 首页
 */
interface IProps {
  history: any
  dispatch: any
  test?: string
  loginRes: any
}
const defaultAvatar = require('./images/bjt.jpg')
class Login extends React.Component<IProps> {
    public state = {
      userDetail: {
        avatar: defaultAvatar,
        name: 'baggio',
        completion: '70%',
        city: '杭州'
      },
      username: '',
      password: '',
      loginRes: {code: -1}
    }
    constructor (props: any) {
        super(props)
    }
    // componentWillMount() {

    // },
    public handleSubmit = () => {
      console.log('submit...')
    }
    public login = async () => {
      const { username, password } = this.state
      // 校验
      if (!username || !password) {
        return
      }

      const params = {
        username,
        password
      }
      // dispatch 能否异步拿到返回值
      const res = await this.props.dispatch(doLogin(params))
      console.log('login dispatch:', res)
      const { history } = this.props
      // history.push('home')
      history.push({pathname: '/home'})
      this.setState({
        loginRes: this.props.loginRes
      }, () => {
        const { loginRes } = this.state
        if (loginRes.code === 0) {
          history.push('home')
        }
      })
    }
    // 表单输入发生改变时
    public handleChange = (e: any) => {
      const target = e.target
      const value = target.value
      const name = target.name
      this.setState({
        [name]: value
      })
    }
    // test
    public handleLoginTest = () => {
      this.props.dispatch(loginTest())
    }
    public handleBlogListTest = () => {
      this.props.dispatch(ListTest())
    }

    public render () {
      const {userDetail} = this.state
        return (
            <div className="login-container">
              <div className="login-box">
                <div className="default-avatar">
                <ImgIcon src={userDetail.avatar}
                        size={90}
                        shape="circle" />
                </div>
                <form className="auth-form" onSubmit={this.handleSubmit}>
                  <div className="form-item">
                    <input type="text"
                          name="username"
                          className="username-ipt f-input"
                          placeholder="用户名"
                          onChange={this.handleChange}/>
                  </div>
                  <div className="form-item">
                    <input type="password"
                            name="password"
                            className="password-ipt f-input"
                            placeholder="密码"
                            onChange={this.handleChange}/>
                  </div>
                  <div className="login-btn">
                    <button
                      onClick={this.login}
                      type="button"
                      className="f-button primary">登录</button>
                  </div>
                </form>
              </div>
                <button onClick={this.handleLoginTest}>test</button>
                <button onClick={this.handleBlogListTest}>list test</button>
            </div>
        )
    }
}

export default connect(
  (state: any) => ({
    loginRes: state.userReducer.loginRes,
    loginTestData: state.userReducer.loginTestData
  }))(Login)
