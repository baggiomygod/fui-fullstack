/**
 * axios请求和返回拦截
 * create by wengfan
 * 2018-12-17
 * use:
 *
 */
import axios from 'axios'

// service 默认配置
let service: any
service = axios.create({
	timeout: 5000,
})

/**
 *
 * @param {*} code
 * 错误处理
 */
function handleErr(res: any) {
	switch (res.code) {
    case 301:
      break
    case 404:
    case 405:
    case 401:
      break
    default:
      break
    }
}

/**
 *
 * @param {*} config
 * get 默认
 * post 默认
 */
function handleMethodConfig(config: any) {
    	config.headers['Content-Type'] = 'application/json'
      if (config.method === 'get') {
        // config.params = { ...config.params }
	} else if (config.method === 'post') {
        // config.data = { ...config.data }
				console.log(config)
	}
}

/**
 * 请求拦截 interceptors.request
 * get post 处理
 */
service.interceptors.request.use(
    (config: any) => {
      config.headers = {...config.headers }
      handleMethodConfig(config) // get post请求参数配置
      return config
    },
    (error:any) => {
	Promise.reject(error)
}
)

/**
 * 响应拦截 interceptors.response
 * 统一错误处理
 */
service.interceptors.response.use(
    (response: any) => {
      const res = response.data
      if (res.code !== 0) {
        handleErr(res)
		    return Promise.reject(res.message);
        // return res
      } else {
        return res
      }
    }, (error: any) => {
  		return Promise.reject(error);
}
)
export default service as any
