import {http} from 'src/axios/http'
export default {
    // 登录
    login (params: any): any {
        return http('post', 'login', params)
    }
}