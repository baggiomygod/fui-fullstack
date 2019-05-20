# axios配合react-router实现未登录跳转路由
```
        import axios from 'axios'
        import createHistory from 'history/createHashHistory';
        const history = createHistory();

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
                    history.push('/login')  // 未登录跳转
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
        * header加入token
        * get post 处理
        */
        service.interceptors.request.use(
            (config: any) => {
                    // config.headers = {...config.headers }
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
            if (!(res.code === 0)) {
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
```