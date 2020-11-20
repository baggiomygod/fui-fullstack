import * as React from 'react'

class DerivedExample extends React.Component<any>{
  public state = {
    color: '#000',
    prevPropColor: ''
  }
  constructor(props: any) {
    super(props)
    console.log('constructor')
  }
  public static getDerivedStateFromProps(props: any, state: any){
    console.log('getDerivedStateFromProps', props.color)
    if (props.color !== state.prevPropColor){
      console.log('props变化 返回值修改state')
      return {
        color: props.color,
        prevPropColor: props.color
      }
    }
    return null
  }
  public componentDidUpdate(){
    console.log('component did update')
  }
  public render(){
    console.log('render...')
    return (
      <div>
       color:{this.state.color}
       <br/>
       prevColor:{this.state.prevPropColor}
      </div>
    )
  }
}

export default DerivedExample
