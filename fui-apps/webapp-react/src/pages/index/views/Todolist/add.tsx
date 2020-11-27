import * as React from 'react'
import './add.styl'
interface IProps {
  [propName: string]: any
}

export default function add(props: IProps) {
  return (
    <div className="add-container">
      <i className="icon iconfont icon-add-line1" />
    </div>
  )
}
