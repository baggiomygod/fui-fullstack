import {Get, Post, Controller, HttpStatus, Param, Query, Body} from '@nestjs/common';
import {articlesService} from './articles.service'
import {Articles} from '../app-entities/articles.entity'

@Controller('articles')
export class articlesController {
    constructor (private readonly articlesService: articlesService) {
    }

    @Get()
    root(): string {
        return this.articlesService.root()
    }

    @Get('/list')
    async articles(): Promise<Articles[]> {
        return this.articlesService.articles()
    }
    @Get('/:id')
    async findArticle(@Param() params): Promise<Articles> {
        return this.articlesService.findArticle(params.id)
    }

    @Post('/add')
    async create(@Body() params): Promise<Articles> {
        return this.articlesService.create(params)
    }
}