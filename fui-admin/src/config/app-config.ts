
// const targetProxy = 'http://yapi.demo.qunar.com/mock/16864'
// 目前fui-admin 从package.json中获取proxy
const nodeBlogService = 'http://127.0.0.1:8000' // bolg node
// const expressBlogService = 'http://127.0.0.1:8010' // bolg express
// const koaService = 'http://127.0.0.1:8020' // bolg koa2

const appConfig: any = {
    name: 'fui',
    mock: true,
    proxy_target: nodeBlogService

}

export default appConfig