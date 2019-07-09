import * as React from 'react'
import logProps from './LogProps'
class FancyButton extends React.Component<any>{
  public state:any = {
    count: 0
  }
  constructor(props: any) {
    super(props)
  }
  public focus() {
    console.log('btn fouus')
  }
  public componentDidMount() {
    this.setT()
  }
  public setT = () => {
    setInterval(() => {
      this.setState(
        (state: any, props: any) => ({
          count: state.count++
        }))
      }, 1000)
  }
  public render () {
    const count = this.state.count
    return (
      <div>
        <button>log props click...</button>
        <div>{count}</div>
      </div>
    )
  }
}


export default logProps(FancyButton)
