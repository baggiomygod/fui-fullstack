
import * as types from '../actionTypes'

const initState = {
  loginRes: {},
  loginTestData: {}
}

const handleLogin = (state: any, action: any) => {
  if (action) {
    console.log('handleLogin:', action)
    return {
      ...state,
      loginRes: action
    }
  }
}

// login-test
const handleLoginTest = (state: any, action: any) => {
  if (action) {
    return {
      ...state,
      loginTestData: action.data
    }
  }
}
const loginReducer = (state: any = initState, action: any) => {
  switch (action.type) {
    case types.DO_LOGIN: return handleLogin(state, action)
    case types.TEST_LOGIN: return handleLoginTest(state, action)
    default: return state
  }
}


export default loginReducer
