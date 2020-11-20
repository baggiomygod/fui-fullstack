import * as React from 'react'

import Export from './export'
import * as Export2 from './export'

console.log('import:', Export)
console.log('import * as:', Export2)

interface IProps{
  // getDerivedStateFromError: any
  name?: string
}
class ErrorBoundary extends React.Component<IProps>{
  public state = {
    hasError: false,
    errorInfo: ''
  }
  constructor(props: any) {
    super(props)
    // this.state = { hasError: false }
  }

  public getDerivedStateFromError(error: any) {
    // 更新 state 使下一次渲染可以显降级 UI
    return { hasError: true };
  }

  public componentDidCatch(error: any, info: any) {
    console.log('componentDidCatch:', error, info)
    // logErrorToMyService(error, info)
    this.setState({
      hasError: error,
      errorInfo: info
    })
  }
  public render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary
