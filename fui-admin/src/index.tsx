import * as React from 'react'
import * as ReactDOM from 'react-dom'
// import Admin from './mooc-admin';
import Router from './router'
// redux
// import { Provider } from 'react-redux'
// import configureStore from './redux/store/configureStore'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

// mooc
import './mock'

// window._ROUTER_ = this.props.history;

// const store = configureStore()
ReactDOM.render(
    <Router />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
