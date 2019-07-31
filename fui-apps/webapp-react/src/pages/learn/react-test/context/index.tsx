import * as React from 'react'

const MyContext = React.createContext('default')

class Parent extends React.Component {
  public state = {
    childContext: '123',
    newContext: '456'
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
        <MyContext.Provider value={this.state.newContext}>
          {this.props.children}
        </MyContext.Provider>
      </>
    )
  }
}
Parent.contextType = MyContext

function Child1(props: any, context: any) {
  console.log(props, context)
  return <MyContext.Consumer>
        {
          value => <p>newContext: {value}</p>
        }
        </MyContext.Consumer>
}

export default () => (
  <Parent>
    <Child1 />
  </Parent>
)
