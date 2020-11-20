// reducer
function combineReducers(reducersArg: any) {
  return function reducer(state: any, action: any) {
    const newState = {}
    for (const key in reducersArg) {
      if (reducersArg.hasOwnProperty(key)) {
        newState[key] = reducersArg[key](state[key], action)
      }
    }
    return {
      ...state,
      ...newState,
    }
  }
}

const reducers: any = {
  todos(state: any, action: any) {
  const { type, payload } = action
    switch(type) {
      case 'set':
        return payload
      case 'add':
        return [...state, payload]
      case 'remove':
        return state.filter((todo: any) => {
            return todo.id !== payload
          })
      case 'toggle':
        return state.map((todo: any) => {
            return todo.id === payload
                      ? {
                          ...todo,
                          complete: !todo.complete,
                        }
                      : todo
          })
      default:
      break;
    }
  },
  incrementCount(state: any, action: any) {
    const { type } = action
    switch(type) {
      case 'set':
      case 'add':
        return state + 1;
    }
    return state
  },
}

/**
 * old
 * @param state
 * @param action
 * 判断不同的type，返回newState
 */
// function reducer(state: ITodoState, action: any) {
//   const { type, payload } = action
//   const { todos, incrementCount } = state
//   switch(type) {
//     case 'set':
//       return {
//         ...state,
//         todos: payload,
//         incrementCount: incrementCount + 1,
//       };
//     case 'add':
//       return {
//         ...state,
//         todos: [...todos, payload],
//         incrementCount: incrementCount + 1,
//       }
//     case 'remove':
//       return {
//         ...state,
//         todos: todos.filter((todo: any) => {
//           return todo.id !== payload
//         })
//       }
//       break;
//     case 'toggle':
//       return {
//         ...state,
//         todos: todos.map((todo: any) => {
//           return todo.id === payload
//                     ? {
//                         ...todo,
//                         complete: !todo.complete,
//                       }
//                     : todo
//         })
//       };
//     default:
//     break;
//   }
//   return state
// }

export default combineReducers(reducers)
