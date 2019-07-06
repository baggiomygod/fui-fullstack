import * as React from 'react'
class Test extends React.Component<any> {
  render() {
    return (
      <div>
        test:
        <span>x:{this.props.mouse.x}</span>
        <span>y:{this.props.mouse.y}</span>
      </div>
    );
  }
}
export default Test
