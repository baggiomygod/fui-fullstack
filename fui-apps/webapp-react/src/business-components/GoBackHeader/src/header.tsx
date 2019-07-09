import * as React from 'react'
import { NavBar } from 'src/fui'
import { withRouter } from 'react-router-dom';
import './header.styl'

function Header(props: any) {
  const goBack = () => {
    const { history } = props
    history.goBack();
  }
  return (
    <React.Fragment>
      <NavBar
        mode="dark"
        onLeftClick={goBack}
        icon={
          <i className="icon iconfont icon-zuojiantou" />
        } />
    </React.Fragment>
  )
}

export default withRouter<any, any>(Header)
