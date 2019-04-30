import {Get, Post, Controller, HttpStatus, Param, Query, Body, HttpCode, Res, Req, Header} from '@nestjs/common';
import { CosStsService } from './cos-sts.service';
@Controller('cos-sts')
export class CosStsController {
    constructor (private cosStsService: CosStsService) {}

    @Get()
    async root(): Promise<any>{
        const response = await this.cosStsService.root()
        console.log(response)
        return await response
    }
}