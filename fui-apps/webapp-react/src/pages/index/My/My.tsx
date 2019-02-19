import * as React from 'react'
import {ImgIcon} from 'src/fui'
import './My.styl'
/**
 * @constructor <Home />
 * @description 首页
 */
interface IProps {
  test?: string
}
class My extends React.Component<IProps> {
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
    public render () {
      const {userDetail} = this.state
        return (
            <div className="my-wrap">
              <div className="my-info">
                <ImgIcon src={userDetail.avatar}
                        size={'large'}
                        shape="circle" />
                <div className="user-intro">
                  <div className="name intro-item">{userDetail.name}</div>
                  <div className="intro-item">{userDetail.city}</div>
                  <div className="intro-item">资料完整度{userDetail.completion}</div>
                </div>
                <i className="icon iconfont icon-gengduo" />
              </div>
              <ul className="setting-list">
                  <li className="set-item">
                    <i className="icon iconfont icon-send-s" />
                    <span>我的发布</span>
                    <i className="icon iconfont icon-gengduo" />
                  </li>
                  <li className="set-item">
                    <i className="icon iconfont icon-like-s" />
                    <span>我的关注/收藏</span>
                    <i className="icon iconfont icon-gengduo" />
                  </li>
                  <li className="set-item">
                    <i className="icon iconfont icon-check-s" />
                    <span>最近浏览</span>
                    <i className="icon iconfont icon-gengduo" />
                  </li>
                  <li className="set-item">
                    <i className="icon iconfont icon-set-s" />
                    <span>设置</span>
                    <i className="icon iconfont icon-gengduo" />
                  </li>
                  <li className="set-item logout">
                    <div>退出登录</div>
                  </li>
              </ul>
            </div>
        )
    }
}

export default My
