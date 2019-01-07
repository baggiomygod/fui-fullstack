import {http} from 'src/axios/http'
export default {
    // 列表
    getPersons (params: any): any {
        return http('post', 'person', params)
    },
    // 轨迹
    getCarDeiving() {
        return http('post', 'car_driving', {})
    },

    // delete时请求不成功，请求头方法为OPTIONS
    // Request Method: OPTIONS 
    // Status Code: 403 Forbidden
    delPerson(params:any) {
        return http('post', 'person/' + params.id, {}) // delete
    },

    // 详情
    getPersonDetail(params:any) {
        return http('get', 'person/' + params.id, {})
    }
}