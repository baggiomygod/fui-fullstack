import {Module} from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { articlesController } from './articles.controller'
import { articlesService } from './articles.service'
import { Articles } from '../app-entities/articles.entity'
@Module({
    imports: [TypeOrmModule.forFeature([Articles])],
    providers: [articlesService],
    controllers: [articlesController]
})

export class ArticleModule {

}