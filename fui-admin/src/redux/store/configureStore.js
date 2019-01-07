// 引入createStore创建store, 引入applyMiddleware 来使用中间件
import {createStore, applyMiddleware} from 'redux'
// 引入所有reducer
import reducer from  'src/redux/reducer'

// 安装 redux-devtolls-extension的可视化工具
// import { composeWithDevTools } from 'redux-devtools-extension'

const initialSatet = {
    menuName: ''
}

const configureStore = () => createStore(reducer, initialSatet)
export default configureStore