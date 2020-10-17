import * as React from 'react'

/* tslint:disable */
export default class State1 extends React.Component {
  state = {
    name: 'xx',
    age: 12,
    address: 'aa-19--yy',
  }

  componentDidMount() {
    // 这里传入部分state,最终会和原来的state合并
    this.setState({
      name: 'yy'
    })
    console.log(this.state.name) // xx
  }
  render () {
    return <div>state 1</div>
  }
}
