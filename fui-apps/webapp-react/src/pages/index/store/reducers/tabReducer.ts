import * as types from '../actionTypes'
import config from '../../config'
const initState = {
    num: 0,
    tabs: [
        {
            label: '首页',
            key: config.TAB_ICON.home,
            icon: 'icon iconfont icon-shouye'
        },
        // {
        //     label: '订单',
        //     key: config.TAB_ICON.order,
        //     icon: 'icon iconfont icon-xiaofeimingxidan'
        // },
        {
            label: '用户',
            key: config.TAB_ICON.user,
            icon: 'icon iconfont icon-yonghu'
        }
    ],
    activeTab: 'home'
}

// 实现oldNum+newNum
const add = (state:any, action: any) => {
    const objNum = action.obj.num
    const num = state.num

    // 相当于进行react的 setState() 操作
    return {
        num: num + objNum
    }
}

const changeTabs = (state: any, action: any) => {
    console.log('4. change data...')
    console.log('state:', state)
    console.log('action', action)
    return {
        ...state,
        activeTab: action.obj.activeTab
    }
}
const tabReducer = (state:any = initState, action: any) => {
    console.log('3. reducer...')
    switch (action.type) {
        case types.ADD_TODO: return add(state, action)
        case types.CHANGE_TABS: return changeTabs(state, action)
        default: return state
    }
}
export default tabReducer
