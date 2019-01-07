import * as React from 'react'
import * as ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Main from './Main/index'

ReactDom.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('root') as HTMLElement
)
