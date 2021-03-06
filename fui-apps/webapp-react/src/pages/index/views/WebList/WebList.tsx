import * as React from 'react'
// import { Link } from 'react-router'
import { NavLink } from 'react-router-dom'

import './WebList.styl'
/**
 * @constructor <WebList />
 * @description web列表
 */
interface IProps {
  test?: string
}
class WebList extends React.Component<IProps> {
    public state = {
      
    }
    constructor (props: any) {
        super(props)
    }
    public render () {
        return (
            <div className="web-list-wrap">
              
              <ul className="setting-list">
                  <li className="set-item" >
                      <i className="icon iconfont icon-send-s" />
                        <NavLink to="/web_vr">
                            <span>webVR</span>
                        </NavLink>
                      <i className="icon iconfont icon-gengduo" />
                  </li>
              </ul>
            </div>
        )
    }
}

export default WebList
