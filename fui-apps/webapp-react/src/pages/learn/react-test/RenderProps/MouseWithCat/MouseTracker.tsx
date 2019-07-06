import * as React from 'react'
import Mouse from './Mouse'
import Cat from './Cat'
// import Dog from './Dog'
class MouseTracker extends React.Component {
  render() {
    // 这里的mmouse:any 值是Mouse组件中:{this.props.render(this.state)}
    const renderMouseCat = (mouse:any) => (
      <Cat mouse={mouse} />
    )
    // const renderMouseDog = (mouse: any) => {
    //   <Dog mouse={mouse}/>
    // }
    return (
      <div>
        <h1>移动鼠标!</h1>
        <Mouse render={renderMouseCat}/>
      </div>
    );
  }
}
export default MouseTracker
