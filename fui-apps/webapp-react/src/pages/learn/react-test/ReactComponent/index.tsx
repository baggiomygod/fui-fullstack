import * as React from 'react'
import A from './A'

class ReactComponent extends React.Component{
  constructor(props: any) {
    super(props)
  }
  public componentDidMount() {
    console.log('A mounted...')
  }
  public render() {
    return (
      <div>react A:
        <A>
          <div>inner A</div>
        </A>
      </div>
    )
  }
}

export default ReactComponent
