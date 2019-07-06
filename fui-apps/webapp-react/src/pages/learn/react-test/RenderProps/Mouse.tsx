import * as React from 'react'
import NewMouseTracker from './NewMouseTracker'

class Mouse extends React.Component<any> {
  public state = {
    x: 'testx',
    y: 'testy',
  }
  render() {
    return (
      <div>
        <h1>mouse</h1>
        <NewMouseTracker />
        {this.props.render(this.state)}
      </div>
    );
  }
}
export default Mouse
