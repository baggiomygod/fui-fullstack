import { Module } from '@nestjs/common'
import { FuiAdminPersonService } from './fui_admin_person_table.service'
import { FuiAdmnPersonController } from './fui_admin_person_table.controller'
@Module({
    imports: [],
    controllers: [FuiAdmnPersonController],
    providers: [FuiAdminPersonService]
})

export class FuiAdminPersonModule {}