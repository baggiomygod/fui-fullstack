import * as React from 'react'
interface IProps{
  mouse: any
}
class Cat extends React.Component<IProps>{
  render() {
    const mouse = this.props.mouse
    return (
      <span style={
        {
          position: 'absolute',
          left: mouse.x,
          top: mouse.y
        }
      }>cat...^ _ ^</span>
    )
  }
}

export default Cat
