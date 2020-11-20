import * as React from 'react'
class UseErrorBoundary extends React.Component{
  public render() {
    const renderList = () => {
      const num = Math.random() * 10
      if (num > 5) {
        throw new Error('err...')
      }
      return <div>{num}</div>
    }
    
    return (
        <div>{renderList()}</div>
    )
  }
}

export default UseErrorBoundary
