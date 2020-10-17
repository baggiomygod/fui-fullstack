import * as types from '../actionTypes'

const initState = {
  todoList: [],
}

/**
 * 请求列表数据
 * @param state
 * @param action
 *
 */
const fetchTodolist = (state: any, action: any ) => {
    return {
      ...state,
      todoList: action.data
    }
}


const todosReducer = (state: any = initState, action: any) => {
  // fetchTodolist
  switch (action.type) {
    case types.GET_TODOS: return fetchTodolist(state, action)
    default: return state
  }
}

export default todosReducer
