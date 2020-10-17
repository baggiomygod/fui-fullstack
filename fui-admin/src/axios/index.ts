import axios from 'axios'
const JsonP = require('jsonp') //  TSLint: require statement not part of an import statement (no-var-requires) 

interface IOptions {
    url: string
    method?: string
    baseURL?: string
    timeout?: number
    params?: any
    data?: any
    body?: any
}
interface IWeatherAPIRes {
    status: string
    message: string
}
export default class Axios {
    public domain:string
    public chain:any
    constructor(
        config: any = {proxy_target: 'http://localhost:8010'}, 
        chain = (data:any) => data 
    ) {
        this.domain = config.proxy_target
        this.chain = chain
    }
    // static,静态属性在类本身，而不是在实例上
    public jsonp(options: IOptions) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                params: 'callback' // 跨域，callback接收
            }, (err: any, response: IWeatherAPIRes) => {
                if (err) {
                    reject(err)
                    return
                }
                if (response.status === 'success') {
                    resolve(response)
                } else {
                    reject(response.message)
                }
            })
        })
    }

    // 静态属性是存在于类本身上的属性，
    public ajax(options: IOptions) {
        console.log('options:', options)
        return axios({  
                    url: options.url,
                    method: options.method,
                    baseURL: this.domain,
                    timeout: 5000,
                    params: options.params,
                    data: options.data
                }).then((response:any) => {
                    if (response.status >= 400) { 
                        return response
                    }
                    return response.data
                }).then(
                    this.chain
                ).catch(err => {
                    console.error(err)
                })
            }
    // }
} 