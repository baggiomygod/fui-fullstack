import * as React from 'react'
import {hot} from 'react-hot-loader'
import Main from './index'

// @hot(module)
class Container extends React.Component {
  public render() {
    return <Main />
  }
}

export default hot(module)(Container)
