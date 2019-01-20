import * as React from 'react'
import {hot} from 'react-hot-loader'
import Main from './index';

// @hot(module)
class Container extends React.Component {

    public componentDidMount () {
        console.log('main...')
    }
    public render () {
        return <Main />
    }
}
// Cannot find name 'module'.
// Do you need to install type definitions for node?
// Try `npm i @types/node` and then add `node` to the types field in your tsconfig.
// ts(2580)
// yarn add @types/node -D
export default hot(module)(Container)
