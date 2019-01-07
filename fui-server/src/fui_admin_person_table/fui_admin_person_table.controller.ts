import {Get, Post, Response, Controller, HttpStatus, Param, Query} from '@nestjs/common'
import { FuiAdminPersonService } from './fui_admin_person_table.service'

@Controller('person')
export class FuiAdmnPersonController {
    constructor(private readonly FuiAdminPersonService: FuiAdminPersonService) {}

    @Get()
    allTable(@Response() res, @Param('params') params, @Query('query') query):any {
        console.log('params:', params)
        console.log('query:', query)
        const responseData = this.FuiAdminPersonService.getAllTableList()
        res.status(HttpStatus.OK).json(responseData);
    }

    @Post()
    allPersons(@Response() res, @Param('params') params,):any{
        console.log('params:', params)
        const responseData = this.FuiAdminPersonService.getAllTableList()
        res.status(HttpStatus.OK).json(responseData);
    }

}

