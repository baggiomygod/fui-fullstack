import { Module } from '@nestjs/common';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';

// nestjs/typeorm mysql
import {TypeOrmModule} from '@nestjs/typeorm'

import {FuiAdminPersonModule} from 'fui_admin_person_table/fui_admin_person_table.module'
import {ArticleModule} from 'articles/articles.module'
import { GoodsModule } from 'goods/goods.modules';

// 最后要把testModule加入到app.modules.ts
@Module({
  imports: [
    TypeOrmModule.forRoot(), // 用于动态返回typeormmodule, 通过ormconfig.json配置文件配置连接数据库
    FuiAdminPersonModule,
    ArticleModule,
    GoodsModule
  ], // 加入到这里
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
