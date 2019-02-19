import * as React from 'react'
import BottomBar from '../BottomBar/BottomBar';

/**
 * @constructor <Home />
 * @description 首页
 */
interface IProps {
  test?: string
}
// interface IGenericIdentityFn1 {
//   <T>(arg: T): T
// }
// interface IGenericIdentityFn2<T> {
//   (arg: T): T
// }
class Layout extends React.Component<IProps> {
    constructor (props: any) {
        super(props)
    }
    public render () {
        return (
            <div className="layout-wrap">
              {this.props.children}
              <BottomBar />
            </div>
        )
    }
}

export default Layout
