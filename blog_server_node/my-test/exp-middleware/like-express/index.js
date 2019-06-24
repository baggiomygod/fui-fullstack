/**
 * 模拟express实现中间件
 */
const http = require('http')
const slice = Array.prototype.slice

class LikeExpress {
    constructor() {
        // 存放中间件的列表
        this.routes = {
            all: [], // app.uset(mdiileware)
            get: [], // app.get('/api/...', mdiileware)
            post: [], // app.post('/api/...', mdiileware)
            put: [],
            patch: [],
            delete: [],
        }
    }
        /**
         * 注册
         * @params path
         * path: 参数
         * return {
         *  path: ''
         *  stack: [middleware1, middleware2, ...]
         * }
         */
        register(path) {
            const info = {}
            // path参数是字符串
            if (typeof path === 'string') {
                info.path = path
                // 从第二个参数开始转换为数组;[arg1, arg2, ...]
                info.stack = slice.call(arguments, 1)
            } else { // 如果不是字符串，即传入的不是路由，设为跟路由
                info.path = '/'
                info.stack = slice.call(arguments, 0)
            }
            return info
        }

        use() {
            // 通过apply将使用use传入的所有参数传递给register，并按返回info
            const info = this.register.apply(this, arguments)
            this.routes.all.push(info);
        }

        get() {
            const info = this.register.apply(this, arguments)
            this.routes.get.push(info)
        }

        post() {
            const info = this.register.apply(this, arguments)
            this.routes.post.push(info);
        }

        // 匹配访问接口和方法
        match(method, url) {
            let stack = []
            if (url === '/favicon.ico') {
                return stack
            }

            // 获取routes
            let currentRoutes = []
            // use注册的中间件需要全部加入
            currentRoutes = currentRoutes.concat(this.routes.all)
            // get post注册的中间件根据method方法匹配加入
            currentRoutes = currentRoutes.concat(this.routes[method])

            currentRoutes.forEach(routeInfo => {
                // 如果访问的path和注册的path匹配，将中间件合并到stack
                // url === '/api/list', routeInfo.path === '/'
                // url === '/api/list', routeInfo.path === '/api'
                // url === '/api/list', routeInfo.path === '/api/list'
                if (url.indexOf(routeInfo.path) === 0) {
                    stack = stack.concat(routeInfo.stack)
                }
            })

            // 匹配好的中间件列表
            return stack
        }

        /**
         * 核心的next机制
         * stack: [middleware1, middleware2, middleware3, ...]
         */
        handle(req, res, stack) {
            const next = () => {
                // 获取数组第一个,同时原数组中删除了第一个元素
                const middleware = stack.shift()
                if (middleware) {
                    // 1. 执行中间件函数
                    // 2. next再次执行，下次执行时，由于之前shift将当前执行的中间件移除，所以下次执行的时下一个中间件函数
                    middleware(req, res, next) 
                }
            }
            next()
        }

        /**
         * 创建服务时的回调函数
         */
        callback() {
            return (req, res) => {
                // 添加返回数据的方法res.json()
                res.json = (data) => {
                    res.setHeader('Content-Type', 'application/json')
                    res.end(
                        JSON.stringify(data)
                    )
                }

                // 访问的url和method
                const url = req.url
                const method = req.method.toLowerCase()

                // 匹配的路由
                const resultList = this.match(method, url)
                // 执行
                this.handle(req, res, resultList)
            }
        }

        // 创建服务
        listen(...args) {
            const server = http.createServer(this.callback())
            server.listen(...args)
        }
    }

module.exports = () => {
    return new LikeExpress()
}

