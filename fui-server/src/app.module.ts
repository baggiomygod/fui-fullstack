import { Module } from '@nestjs/common';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';

import {TestingModule} from 'first_test/test.module' // 引入文件
import {FuiAdminPersonModule} from 'fui_admin_person_table/fui_admin_person_table.module'
// 最后要把testModule加入到app.modules.ts
@Module({
  imports: [TestingModule, FuiAdminPersonModule], // 加入到这里
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
