import * as React from 'react'

class SetState1 extends React.Component{
  public state = {
    count: 0
  }

  public componentDidMount() {
    //
    this.setState({ count: this.state.count + 1 })
    this.setState({ count: this.state.count + 1 })
    this.setState({ count: this.state.count + 1 })
  }
  public render() {
    return (
      <div>count:{this.state.count}</div>
    )
  }
}

export default SetState1
