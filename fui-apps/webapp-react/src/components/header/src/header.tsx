import * as React from 'react'
import { withRouter } from 'react-router-dom'
import './header.styl'

interface IProps {
  title?: string
  [propName: string]: any
}
const header = (props: IProps) => {
  return (
    <div className="common-header">
      <i className="icon iconfont icon-zuojiantou" onClick={() => { props.history.goBack() }} />
      <h3>{ props.children || 'title' }</h3>
    </div>
  )
}

export default withRouter(header)
