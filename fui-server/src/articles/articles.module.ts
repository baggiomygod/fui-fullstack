import {Module} from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ArticlesController } from './articles.controller'
import { ArticlesService } from './articles.service'
import { Articles } from '../app-entities/articles.entity'
@Module({
    imports: [TypeOrmModule.forFeature([Articles])],
    providers: [ArticlesService],
    controllers: [ArticlesController]
})

export class ArticleModule {

}