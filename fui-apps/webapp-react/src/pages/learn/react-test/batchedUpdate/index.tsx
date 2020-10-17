import * as React from 'react'
// import { unstable_batchedUpdates as batchedUpdate } from 'react-dom'
class BatchedUpdate extends React.Component {
  public state = {
    count: 'test',
  }
  public handleClick = () => {
    // 1. 打印4次test  最终显示test4
    this.changeCount()

    // 2. 打印4次test1/2/3/4  最终显示test4
    // setTimeout 改变了上下文
    // setTimeout(() => {this.changeCount()}, 200)

    // 3. 打印4次test  最终显示test4
    // batchedUpdate设置了上下文
    // setTimeout(() => {
    //   batchedUpdate(() => this.changeCount())
    // }, 200)

  }
  public changeCount = () => {
    // const {count} = this.state
    this.setState({
      count: 'test1'
    })
    console.log('plus1:', this.state.count)

    this.setState({
      count: 'test2'
    })
    console.log('plus2:', this.state.count)

    this.setState({
      count: 'test3'
    })
    console.log('plus3:', this.state.count)

    this.setState({
      count: 'test4'
    })
    console.log('plus4:', this.state.count)

  }
  public render () {

    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>click</button>
      </div>
    )
  }
}

export default BatchedUpdate
