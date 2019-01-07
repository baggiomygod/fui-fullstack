
// action 负责将事件通知给reducer
 import * as types from '../actionTypes'
 export const addTodo = (obj: any) => {
    return {
        type: types.ADD_TODO,
        obj
    }
}
