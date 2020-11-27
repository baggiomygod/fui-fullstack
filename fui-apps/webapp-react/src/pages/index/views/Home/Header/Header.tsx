import * as React from 'react'
import SearchBar from '../SearchBar/SearchBar'

import './Header.styl'
/**
 * @constructor <Header />
 * @description Header
 */
interface IProps {
  test?: string
}
class Header extends React.Component<IProps> {
  public state = {
    headImg: ''
  }
  constructor(props: any) {
    super(props)
  }
  public renderHeaderBg = () => {
    const { headImg } = this.state

    if (headImg) {
      return (<img className="banner-img img-bg" src={headImg} alt="" />)
    } else {
      return (
        <i className="icon iconfont icon-aislogo icon-bg animation-circle " />
      )
    }

  }
  public render() {
    return (
      <div className="header-wrap">
        <SearchBar />
        {this.renderHeaderBg()}
      </div>
    )
  }
}

export default Header
