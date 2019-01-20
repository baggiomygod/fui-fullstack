import * as React from 'react'
import * as ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import 'lib-flexible/flexible'

import store from './store'
import '@/statics/style/index.styl'

import Container from './Main/Container'

ReactDom.render(
    <Provider store={store}>
      <Router>
        <Container />
      </Router>
    </Provider>,
    document.getElementById('root') as HTMLElement
)
