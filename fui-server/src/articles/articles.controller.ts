import {Get, Post, Controller, HttpStatus, Param, Query, Body, HttpCode, Res, Req, Header} from '@nestjs/common';
import {ArticlesService} from './articles.service'
import {Articles} from '../app-entities/articles.entity'
import { Observable, of } from 'rxjs';
// DTO
import {CreateArticleDto, ArticlesQueryDto} from './articles.dto'

@Controller('articles')
export class ArticlesController {
    constructor (private readonly articlesService: ArticlesService) {
    }

    @Get()
    root(): string {
        return this.articlesService.root()
    }

    @Get('/list')
    async articles(@Query() query: ArticlesQueryDto): Promise<Articles[]> {
        return this.articlesService.articles(query)
    }
    @Get(':id')
    findArticle(@Param() params): Observable<any> { // nestjs可以返回一个rxjs objervable流，nest将自动订阅下面的原并获取最后发出的值
        return of(this.articlesService.findArticle(params.id))
    }

    @Post('/add')
    @Header('Cache-Control', 'none') // 自定义响应头
    @HttpCode(200) // nest默认post请求成功返回201，可以通过HttpCode(...)修改
    async create(@Req() request, @Body() params: CreateArticleDto): Promise<Articles> {
        // res.status(HttpStatus.CREATED).send();
        return this.articlesService.create(params)
    }
}