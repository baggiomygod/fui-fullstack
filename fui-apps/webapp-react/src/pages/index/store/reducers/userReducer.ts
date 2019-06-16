
import * as types from '../actionTypes'

const initState = {
  userInfo: {}
}

const handleLogin = (state: any, action: any) => {
  if (action) {
    return {
      ...state,
      userInfo: action.data
    }
  }
}

const loginReducer = (state: any = initState, action: any) => {
  switch (action.type) {
    case types.DO_LOGIN: return handleLogin(state, action)
    default: return state
  }
}

export default loginReducer
