import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
    constructor(){}

    async queryList() {
        const data = {
            "data": {
                "contentList": [
                    {
                        "id": "1111",
                        "title": "${文章标题}",
                        "status": "下架",
                        "pv": 12,
                        "digg": 111,
                        "commentNum": 123,
                        "publishBy": "${发布人}",
                        "publishedTime": 1552619772325,
                        "updateBy": "${修改人}",
                        "update_time": 1552619772325
                    },
                ],
                "pageNo": "${当前页码}",
                "pageSize": "${页面大小，设置为“-1”表示不进行分页（分页无效），默认每页20条}",
                "count": "${总记录数，设置为“-1”表示不查询总数"
            },
        "message": "处理成功",
        "time": "2019-03-14 13:23:01",
        "success": true,
        "messageCode": "0"
        }
        return await data
    }

    async getMenusTree () {
        console.log('tree service...')
        const menus = {"data":[{"desc":"内容管理","id":726,"parentCode":"36","type":"m"},{"desc":"标签管理","id":727,"parentCode":"36","type":"m"}],"message":"处理成功","messageCode":"0","success":true,"time":"2019-03-19 17:16:19"}
        return await menus
    }
}