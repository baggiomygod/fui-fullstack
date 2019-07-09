import * as React from 'react'
import Mouse from './Mouse'
import Test from './testComponent'
class WithMouse extends React.Component {
  public render() {
    const renderFn = (mouse: any) => {
      console.log('mouse:', mouse)
      return (<Test mouse={mouse} />)
    }
    return (
      <Mouse render={renderFn} />
    );
  }
}
export default WithMouse
