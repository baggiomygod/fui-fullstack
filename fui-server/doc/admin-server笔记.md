# 目录
1. nestjs项目
2. [typeorm使用](#typeorm使用)


# 1.nestjs使用
见nestjs.md

# 2.typeorm使用
## 1. 安装配置
1. 安装
```
    yarn add @nestjs/typeorm typeorm mysql
```

2. app.module.ts 
用于动态返回typeormmodule, 通过ormconfig.json配置文件配置连接数据库
```
    import { Module } from '@nestjs/common';
    import { AppController } from 'app.controller';
    import { AppService } from 'app.service';

    // nestjs/typeorm mysql
    import {TypeOrmModule} from '@nestjs/typeorm'

    import {FuiAdminPersonModule} from 'fui_admin_person_table/fui_admin_person_table.module'
    // 最后要把testModule加入到app.modules.ts
    @Module({
    imports: [
        TypeOrmModule.forRoot(), // 用于动态返回typeormmodule, 通过ormconfig.json配置文件配置连接数据库
        FuiAdminPersonModule,
    ], // 加入到这里
    controllers: [AppController],
    providers: [AppService],
    })
    export class AppModule {}
```
ormconfig.json配置文件
```
    {
        "type": "mysql",
        "host": "cdb-1qkcive2.bj.tencentcdb.com",
        "port": 10038,
        "username": "root",
        "password": "rbaggio10",
        "database": "sys",
        "entities": ["src/**/**.entity{.ts,.js}"],
        "synchronize": true
    }
```

## 2. 查询数据库
#### typeorm
- Repository
- getManager
- getConnection

### Repository方法：
- find()
- findOne()

test.service.ts
```
import { Injectable } from '@nestjs/common'
import { Test } from '../app-entities/test.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager, getConnection } from 'typeorm';

// nest中，要把一个类定义为服务，就要用@Injectable装饰器来提供元数据，以便让Nest可以把它作为依赖注入到控制器中
@Injectable()
export class testService {
    constructor(
        @InjectRepository(Test)
        private readonly testRepository: Repository<Test>) {}
    
    root(): string {
        return 'test list'
    }
    
    async findAll(): Promise<Test[]> {
        return await this.testRepository.find()
    }

    async findone(id: string): Promise<Test> {
        const params = {
            id
        }
        return await this.testRepository.findOne(params)
    }
}

```