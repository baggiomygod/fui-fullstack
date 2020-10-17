import Http from 'src/server-http'
export default {
    // 轨迹
    getCarDeiving(params:any = {}) {
        // if (gitReview) {
        //     return gitReivewMock.carDriveingData()
        // }
        return Http({ url: 'api/cms/car_driving', method: 'get', params })
    },
    // 列表
    getPersons (params: any): any {
        return Http( {url: 'api/cms/person', method: 'get', params})
    },

        // delete时请求不成功，请求头方法为OPTIONS
    // Request Method: OPTIONS 
    // Status Code: 403 Forbidden
    delPerson(params:any) {
        return Http({ url: 'api/cms/person/del/' + params.id, method: 'post', params}) // delete
    },

    // 详情
    getPersonDetail(params:any) {
        return Http({ url: 'api/cms/person/' + params.id, method: 'get', params})
    }
}


// import {http} from 'src/axios/http'
// // import gitReivewMock from 'src/mock/git-review/git-review'
// export default {
//     // 列表
//     getPersons (params: any): any {
//         return http('post', 'person', params)
//     },
//     // 轨迹
//     getCarDeiving(params:any = {}) {
//         return http('get', 'car_driving', {}) // delete
//     },
    

//     // delete时请求不成功，请求头方法为OPTIONS
//     // Request Method: OPTIONS 
//     // Status Code: 403 Forbidden
//     delPerson(params:any) {
//         return http('post', 'person/' + params.id, {}) // delete
//     },

//     // 详情
//     getPersonDetail(params:any) {
//         return http('get', 'person/' + params.id, {})
//     }
// }