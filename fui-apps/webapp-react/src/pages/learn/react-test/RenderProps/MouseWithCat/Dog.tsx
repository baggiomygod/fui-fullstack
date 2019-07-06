import * as React from 'react'
interface IProps{
  mouse: any
}
class Dog extends React.Component<IProps>{
  render() {
    const mouse = this.props.mouse
    return (
      <span style={
        {
          position: 'absolute',
          left: mouse.x,
          top: mouse.y
        }
      }>Dog...^ _ ^</span>
    )
  }
}

export default Dog
