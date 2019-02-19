import { Injectable } from '@nestjs/common';

/* 连接mongoDB数据库 */
// import { MongoClient } from 'mongodb'
// const mongoUrl = 'mongodb://127.0.0.1:27017/fui_admin'
// MongoClient.connect(mongoUrl, (err, db) => {
//     if (err) {
//         throw err
//     }
//     console.log('数据库已连接')
//     var dbase = db.db("fui_admin");
    // 创建集合
    // dbase.createCollection('city_manage', function (err, res) {
    //     if (err) throw err;
    //     console.log("创建city集合!");
    //     db.close();
    // });
// })

interface IResponse {
    code: string
    msg: string
    obj: any
}
@Injectable()
export class FuiAdminPersonService {
    getAllTableList(): IResponse {
        const tablelist = [
            { city: '1', person_type: 'sss', name: '111', phone: '11232232322', id: 1},
            { city: '2', person_type: 'ssd', name: '222', phone: '11232342122', id: 2},
            { city: '3', person_type: 'dde', name: '333', phone: '14133222322', id: 3},
            { city: '4', person_type: 'qwe', name: '444', phone: '11232232322', id: 4},
            { city: '5', person_type: 'asd', name: '555', phone: '11232232322', id: 5}
        ]
        const response:any = {
            code: 0,
            msg: 'success',
            obj: tablelist
        }
        return response
    }
  
}