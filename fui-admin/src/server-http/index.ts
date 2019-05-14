/**
 * axios请求和返回拦截
 * create by wengfan
 * 2018-12-17
 * use:
 *
 */
import axios from 'axios'
// import appConfig from '../config/app-config'
// service 默认配置
let service: any
service = axios.create({
  // baseURL: appConfig.proxy_target,
	timeout: 5000,
})

/**
 *
 * @param {*} code
 * 错误处理
 */
function handleErr(res: any) {
	switch (res.messageCode) {
	case 301:
		break
	case 404:
	case 405:
	case 401:
		break
	default:
		// Message({ type: 'error', message: res.message })
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
	if (config.method === 'get') {
        // config.params = { ...config.params }
	} else if (config.method === 'post') {
        // config.data = { ...config.data }
	}
}

/**
 * 请求拦截 interceptors.request
 * header加入token
 * get post 处理
 */
service.interceptors.request.use(
    (config: any) => {
			// config.headers = {...config.headers }
			console.log(config.headers)
			handleMethodConfig(config) // get post请求参数配置
      return config
    },
    (error: any) => {
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
	if (!res.success) {
		handleErr(res)
		return res
	} else {
		return res
	}
}, () => {
	// Message({ type: 'error', message: '网络异常，请联系管理员' })
		// return Promise.reject(error);
}
)
export default service
