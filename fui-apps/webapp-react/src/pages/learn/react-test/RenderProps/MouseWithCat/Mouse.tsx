import * as React from 'react'
/**
 * render props可以让Mouse能够动态决定需要渲染什么
 *
 * render prop是一个用于告知组件需要渲染什么内容的prop
 */
interface IProps {
  render: any
}
class MouseTracker extends React.Component<IProps> {
  public state = {
    x: 0,
    y: 0
  }
  constructor(props: any) {
    super(props)
  }
  public handleMouseMove = (event: any) => {
    console.log(this)
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }
  render() {
    return (
      <div style={{height: '100%'}} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>

    )
  }
}
export default MouseTracker
