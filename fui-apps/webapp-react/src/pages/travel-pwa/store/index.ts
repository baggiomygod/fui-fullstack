import {
  createStore,
  combineReducers, // 合并多个reducer
  applyMiddleware
} from 'redux'

import reducers from './reducers'
import thunk from 'redux-thunk'

const state: any = {
  from: '杭州',
  to: '拉萨',
  isCitySelectorVisible: false, // 城市选择浮层 状态
  currentSelectingLeftCity: false, //
  cityData: null, // 城市选择数据
  isLoadingCityData: false, // 是否正在加载城市数据
  // isDateSelectorViible: false, // 日期选择浮层 状态
  highSpeed: false, // 是否选择高铁 动车
  departDate: Date.now(),
}

/**
 * 创建一个持有状态树的 redux store。
 * 调用dispatch() 是唯一的一种方式去修改 store中的的值。
 * 应用中应该只有一个 store。为了将程序状态中不同部分的变更逻辑
 * 组合在一起，你需要使用 combineReducers 将一些
 * reducers 合并成一个reducer
 *
 * @param {Function} reducer 一个返回下一个状态树的方法，需要提供当
 *  前的状态树和要发送的 action。
 *
 * @param {any} [preloadedState] 初始的状态。
 * 您可以选择指定它来保存通用应用程序中服务器的状态，或者恢复
 * 以前序列化的用户会话。
 * 如果你使用了`combineReducers`方法来生成最终的reducer。那么这个初始状
 * 态对象的结构必须与调用`combineReducers`方法时传入的参数的结构保持相
 * 同。
 *
 * @param {Function} [enhancer] store增强器。你可以选择性的传入一个增强函
 * 数取增强 store，例如中间件，时间旅行，持久化。这 redux 唯一一个自带的
 * 增强器是的 applyMiddleware
 *
 * @returns {Store} 一个可以让你读状态，发布 actions 和订阅变化的 redux
 * store
 */
export default createStore(
  combineReducers(reducers), // combineReducers() 合并多个reducers
  state,  // 初始状态
  applyMiddleware(thunk), // store增强器,
)
