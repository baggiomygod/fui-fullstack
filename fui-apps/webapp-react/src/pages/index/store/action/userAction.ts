
import * as types from '../actionTypes'
import CommonService from 'src/http-service/common'

interface ILogin {
  username: string
  password: string
}
export const doLogin = (params: ILogin) => async (dispatch: any) => {
  const res = await CommonService.doLogin(params)
  console.log('login:', res);
  dispatch({
    type: types.DO_LOGIN,
    data: res.data
  })
}
