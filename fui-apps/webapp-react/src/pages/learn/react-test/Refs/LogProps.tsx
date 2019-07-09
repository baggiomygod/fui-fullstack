import * as React from 'react'
/**
 * 报错
 * Warning: Failed prop type: Invalid prop `component` of type `object` supplied to `Route`, expected `function`.
 */
interface IProps{
  forwardedRef?: any
}
function logProps(Component: any) {
  class LogProps extends React.Component<IProps> {
    constructor(props: any){
      super(props)
    }
    public componentDidUpdate(prevProps: any) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }
    public componentDidMounte() {
      console.log('new props:', this.props);
    }
    public render() {
      const { forwardedRef, ...rest } = this.props
      return <Component ref={forwardedRef} {...rest} />;
      // return <Component {...this.props} />;
    }
  }
  function forwardRef(props: any, ref: any) {
    return <LogProps {...props} forwardedRef={ref} />
  }
  const name = Component.displayName || Component.name
  forwardRef.displayName = `logProps(${name})`
  return React.forwardRef(forwardRef)
  // return <LogProps />
}

export default logProps
