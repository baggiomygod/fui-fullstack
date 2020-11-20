import * as React from 'react'

class SetState1 extends React.Component{
  public state = {
    count: 0
  }
  public incrementCount  = () => {
    this.setState({ count: this.state.count + 1 })
    console.log(this.state.count)
  }
  public incrementCountFn = () => {
    this.setState((prevState: any) => {
      return { count: prevState.count + 1 }
    })
    console.log(this.state.count)
  }
  public componentDidMount() {
    // const btn: any = document.getElementById('btn-1')
    // 1, 2, 3, 4
    // btn.addEventListener('click', () => {
    //   this.incrementCount()
    //   this.incrementCount()
    //   this.incrementCount()
    // })
  }
  public handleClick = () => {
    // 1, 2, 3, 4
    // setTimeout(() => {
    //   this.incrementCount()
    //   this.incrementCount()
    //   this.incrementCount()
    // }, 0)

    // 合并 异步更新 0 0 0 0
    this.incrementCount()
    this.incrementCount()
    this.incrementCount()
  }
  public render() {
    return (
      <div>
        count:{this.state.count}
        <div>
          <button onClick={this.handleClick}>onClick</button>
          <button id="btn-1">addEvent</button>
        </div>
      </div>
    )
  }
}

export default SetState1
