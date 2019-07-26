import * as React from 'react'

class A extends React.Component{
  constructor(props: any) {
    super(props)
  }
  public componentDidMount() {
    console.log('A mounted...')
  }
  public render() {
    return (
      <div>A 组件
        {this.props.children}
      </div>
    )
  }
}

export default A
