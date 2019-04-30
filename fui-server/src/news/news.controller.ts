import {Get, Post, Controller, Param, Query, Body, HttpCode, Res, Req, Header} from  '@nestjs/common'
import {NewsService} from './news.service'

@Controller('news')
export class NewsController {
    constructor (private readonly newsService: NewsService) {}
    @Get('menus/tree')
    menusTree(@Req() request, @Body() body, @Param() params, @Query() query): any {
        // console.log('req:', request)
        console.log('news req...', body)
        console.log('news req...', params)
        console.log('news req...', query)
        
        return this.newsService.getMenusTree()
    }
    @Get('content/queryList')
    queryList(@Req() request): any {
        // console.log('req:', request)
        console.log('content req...')
        return this.newsService.queryList()
    }
}