import * as React from 'react'

const TargetComponent = React.forwardRef((props:any, ref:any) => (
  <input type="text" ref={ref}/>
))

class ForwardRefTest extends React.Component{
  public ref:any = React.createRef()
  constructor(props: any){
    super(props)
  }
  public componentDidMount(){
    this.ref.current.value = 'test...'
  }
  public render(){
    return <TargetComponent ref={this.ref} />
  }
}

export default ForwardRefTest
