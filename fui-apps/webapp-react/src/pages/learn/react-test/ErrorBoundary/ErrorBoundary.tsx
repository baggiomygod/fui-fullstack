import * as React from 'react'
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
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  public componentDidCatch(error: any, info: any) {
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
