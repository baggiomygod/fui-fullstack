import * as React from 'react'
import * as ReactDOM from 'react-dom'
// import { registerMicroApps, start } from 'qiankun';
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

// qiankun 注册微服务
// registerMicroApps([
//   {
//     name: 'react app', // app name registered
//     entry: '//localhost:7100',
//     container: '#yourContainer',
//     activeRule: '/yourActiveRule',
//   },
//   {
//     name: 'vue app',
//     entry: { scripts: ['//localhost:7100/main.js'] },
//     container: '#yourContainer2',
//     activeRule: '/yourActiveRule2',
//   },
// ]);

// start();