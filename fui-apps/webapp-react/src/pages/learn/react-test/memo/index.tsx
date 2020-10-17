import * as React from 'react';
import Child from './Child'


export default class MemoTest extends React.Component<any, any> {
  public state = {
    count: 0,
    person: {
      age: 18
    }
  }
  public addCount = () => {
    this.setState({count: this.state.count + 1})
  }
  public addAge = () => {
    const { person } = this.state
    person.age++
    this.setState({
      person
    }, () => {
      console.log(this.state.person)
    })
  }
  public render() {
    return (
      <div>
        <button onClick={this.addCount} >change count</button>
        <button onClick={this.addAge} >change age</button>
        parent:{ this.state.count }
        <Child name="memotest" person={this.state.person}/>
      </div>
    );
  }
}
