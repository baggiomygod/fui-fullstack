// import { http } from 'src/axios/http'
import Http from 'src/server-http'

export default {
    // 登录
    login(data = {}) {
        return Http({url: '/api/user/login', method: 'post', data})
      },
}