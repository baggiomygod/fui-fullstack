import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './Router/Container'
import * as serviceWorker from './serviceWorker';
import '../../assets/css/normalize.css'
import './main.styl'

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root-pwa'))

// 生产环境开启sw
if ('production' === process.env.NODE_ENV) {
    serviceWorker.register(undefined);
} else {
    serviceWorker.unregister();
}
