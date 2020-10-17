import * as React from 'react'
import GetDerivedExample from './getDerivedStateFromProps'
class Example extends React.Component<any>{
  public state = {
    color: ''
  }
  constructor(props: any) {
    super(props)
  }
  public changeColor = (color: string) => {
      this.setState({
        color
      })
  }
  public render(){
    return (
      <div>
       <GetDerivedExample color={this.state.color} />
       <button onClick={this.changeColor.bind(this, '#fff')}>FFF</button>
       <button onClick={this.changeColor.bind(this, '#000')}>000</button>
       <button onClick={this.changeColor.bind(this, '#eee')}>eee</button>
       <button onClick={this.changeColor.bind(this, '#999')}>999</button>
      </div>
    )
  }
}

export default Example
