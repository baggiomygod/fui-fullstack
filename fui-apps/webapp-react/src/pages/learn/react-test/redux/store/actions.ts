export function createSet(payload: any[]) {
  return {
    type: 'set',
    payload,
  }
}


let idSeq = Date.now()
/**
 *
 * @param text
 */
export function createAdd(text: any) {
  /**
   * dispatch
   * getState
   */
  return (dispatch: any, getState: any) => {
    setTimeout(() => {
      const { todos } = getState() // 通过getState获取最新的state
      // 如果不存在相同的，调用dispatch
      if (!todos.find((todo: any) => todo.text === text)) {
        dispatch({
          type: 'add',
          payload: {
            text,
            id: ++idSeq,
            complete: false,
          }
        })
      }
    }, 3000)

  }
}

export function createRemove(payload: string | number | undefined) {
  return {
    type: 'remove',
    payload,
  }
}

export function createToggle(payload: string | number | undefined) {
  return {
    type: 'toggle',
    payload,
  }
}

export default {}
