import Axios from './index'
import { message } from 'antd'
import appConfig from 'src/config/app-config'

/**
 * res.code约定
 * code 201 200 登录失效 未登录
 * 
 */
const axios = new Axios(appConfig, data => {
    console.log('每个请求验证登录:', data)
    if (data.code === 201 || data.code === 200 ) {
        console.log('登录失效， 请重新登录')
    } else if (data.code === 0) {
        console.log('登录状态')
        message.success(data.msg)
    }
    return data
})

export const http = (method: string, url: string, params: any = {}): any => {
        return new Promise((resolve, reject) => {
            axios.ajax({
                method,
                url,
                params
            }).then((res:any) => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }
