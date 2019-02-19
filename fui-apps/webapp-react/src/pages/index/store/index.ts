import { createStore, applyMiddleware } from 'redux'
import Reducers from './reducers/index'
import thunk from 'redux-thunk'; //
import createHistory from 'history/createHashHistory';
import { routerMiddleware } from 'react-router-redux';
// 创建基于hash的history
const history = createHistory()
// 创建初始化tab
history.replace('home')

// 创建history的middleware
const historyMidddle = routerMiddleware(history)

const store = createStore(
  Reducers,
  applyMiddleware(thunk, historyMidddle)
);
// module.hot 报错
// 解决：原因是ts是静态语言，类型是需要定义的，未定义就有可能找不到
if (module.hot) {
  // 接受(accept)给定依赖模块的更新，并触发一个 回调函数 来对这些更新做出响应
  module.hot.accept('./reducers/index', () => {
    const nextRootReducer: any = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}
export default {store, history}
