import * as React from 'react'
import Control from './Control'
import Todos from './Todos'
import './index.styl'
import { createAdd, createRemove, createToggle } from './store/actions'
import reducer from './store/reducers'
import { useState, useEffect } from 'react';

const store: any = {
  todos: [],
  incrementCount: 0,
}

/**
 *
 * @param actionCreators
 * @param dispatch
 * actions 和 dispatch结合为一个函数
 *
 */
function bindActionCreators(actionCreators: any, dispatch: any) {
  const ret = {}
  for (const key in actionCreators) {
    if (actionCreators.hasOwnProperty(key)) {
      ret[key] = (...args: any) => {
        const actionCeator = actionCreators[key]
        const action = actionCeator(...args)
        console.log('add时是一个function createAdd:', action) // add时是一个function
        dispatch(action)
      }
    }
  }
  console.log('ret:', ret)
  return ret
}

// interface ITodoState {
//   todos: any[]
//   incrementCount: number
// }
// const LS_KEY: string = '_$-todos_'
export default function ReduxTodoList() {
  const [todos, setTodos] = useState([])
  const [incrementCount, setIncrementCount] = useState(0)
  // TODO: 用useCallback，这里不能更新数组，每次都是[todo]?

  useEffect(() => {
    Object.assign(store, { todos, incrementCount })
  }, [todos, incrementCount])

  // useEffect(() => {
  //   // 从localStorage获取数据
  //   const todos = JSON.parse(localStorage.getItem(LS_KEY))
  //   dispatch({
  //     type: 'set',
  //     payload: todos,
  //   })
  // }, [])

  // useEffect(() => {
  //  // 数据保存到localStorage
  //  localStorage.setItem(LS_KEY, JSON.stringify(todos))
  // }, [todos])

  // dispatch
  const dispatch = (action: any) => {
    // const state: ITodoState = {
    //   todos,
    //   incrementCount,
    // }

    const setters = {
      todos: setTodos,
      incrementCount: setIncrementCount
    }

    if (typeof action === 'function') {
      // action(dispatch, state)
      // createAdd(dispatch, getState)
      action(dispatch, () => store) // 异步action
      return
    }

    const newState: any = reducer(store, action)
    for (const key in newState) {
      if (newState.hasOwnProperty(key)) {
        setters[key](newState[key])
      }
    }
  }

  return (
    <div className="todo-list">
      <Control
        {
          ...bindActionCreators({ addTodo: createAdd }, dispatch)
        }
      />
      {/* bindActionCreators */}
      <Todos
        todos={todos}
        { ...bindActionCreators({ removeTodo: createRemove }, dispatch)}
        { ...bindActionCreators({ toggleTodo: createToggle }, dispatch)}
        />
    </div>
  )
}
