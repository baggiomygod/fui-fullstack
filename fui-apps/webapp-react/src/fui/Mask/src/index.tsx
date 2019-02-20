import * as React from 'react'

import './index.styl'

/**
 * @constructor <Modal />
 * @description Modal
 */
interface IPorps {
  handleClick: any
  className: string
}
 class Mask extends React.Component<IPorps>{
   public handleClickMask = () => {
     this.props.handleClick()
   }
  public render() {
    const classNameString = `mask-wrap ${this.props.className}`
    return (
      <div className={classNameString} onClick={this.handleClickMask}>
      {this.props.children}
      </div>
    )
  }
 }

 export default Mask
