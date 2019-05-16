// import { http } from 'src/axios/http'
import Http from 'src/server-http'
import * as qs from 'qs'

export default {
    // 登录
    login(data = {}) {
        console.log(JSON.stringify(data))
        console.log(qs.stringify(data))
        return Http({url: '/api/user/login', method: 'post', data})
      },
}