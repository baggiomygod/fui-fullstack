import * as types from '../actionTypes'

const initState = {
    num: 0
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
const tabReducer = (state:any = initState, action: any) => {
    switch (action.type) {
        case types.ADD_TODO: return add(state, action)
        default: return state
    }
}
export default tabReducer