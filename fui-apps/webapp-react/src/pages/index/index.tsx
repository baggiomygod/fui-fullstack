import * as React from 'react'
import * as ReactDom from 'react-dom'

import { Provider } from 'react-redux'
// import { BrowserRouter as Router } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux';
import 'lib-flexible/flexible'
import Store from './store'
import '@/statics/style/index.styl'
import Container from './Router/Container'
/// <reference path="./@types/cos-js-sdk-v5.d.ts" />
// Store.history
ReactDom.render(
    <Provider store={Store.store}>
      <ConnectedRouter store={Store.store} history={Store.history}>
        <Container />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root') as HTMLElement
)
