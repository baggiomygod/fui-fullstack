import * as React from 'react'

class NewMouseTracker extends React.Component {
  public state = {
    x: 0,
    y: 0
  }
  constructor(props: any) {
    super(props)
  }
  public handleMouseMove = (event: any) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    })
  }
  public render () {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        <h1>NewMouseTracker</h1>
        <p>当前的鼠标位置是 ({this.state.x}, {this.state.y})</p>
      </div>
    )
  }
}
export default NewMouseTracker
