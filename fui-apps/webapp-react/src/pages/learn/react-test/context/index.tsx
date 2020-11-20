import * as React from 'react'
import Middle from './middle';

import {
  MyContext,
  ButtonContext
 } from './my-context';

class Parent extends React.Component {
  public state = {
    childContext: '123',
    newContext: '456',
    buttonCount: 0,
  }
  public componentDidMount() {
    console.log('context did:', this.context)
  }
  public componentDidUpdate() {
    console.log('context update:', this.context)
  }
  public changeInput1 = (e: any) => {
    this.setState({
      childContext: e.target.value
    })
  }
  public changeInput2 = (e: any) => {
    this.setState({
      newContext: e.target.value
    })
  }

  public handleBtn = (e: any) => {
    this.setState({
      buttonCount: this.state.buttonCount + 1
    })
  }
  public render () {
    console.log('context render:', this.context)
    return (
      <>
      <label>1</label>
        <input type="text"
          value={this.state.childContext}
          onChange={this.changeInput1}
        />
      <label>2</label>
        <input
            type="text"
            value={this.state.newContext}
            onChange={this.changeInput2}
          />
        <button onClick={this.handleBtn}>change by buttonContext</button>
        {/* 多个context 且嵌套 */}
        <MyContext.Provider value={this.state.newContext}>
          <ButtonContext.Provider value={this.state.buttonCount}>
            {this.props.children}
          </ButtonContext.Provider>
        </MyContext.Provider>

        {/* <MyContext.Provider value={this.state.newContext}>
            {this.props.children}
        </MyContext.Provider> */}
      </>
    )
  }
}

export default () => (
  <Parent>
    <Middle />
  </Parent>
)
