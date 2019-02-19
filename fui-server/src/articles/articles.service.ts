import { Injectable } from '@nestjs/common'
import { Articles } from '../app-entities/articles.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager, getConnection } from 'typeorm';
import * as crypto from 'crypto-js'

// nest中，要把一个类定义为服务，就要用@Injectable装饰器来提供元数据，以便让Nest可以把它作为依赖注入到控制器中
@Injectable() // @Injectable()装饰器
export class articlesService {

    constructor(
        @InjectRepository(Articles)
        private readonly articlesRepository: Repository<Articles>) {}
    
    root(): string {
        return 'articles list'
    }
    /**
     * articles
     * 返回文章列表
     */
    async articles(): Promise<Articles[]> {
        return await this.articlesRepository.find()
    }
    /**
     * 返回文章
     * @param id 
     */
    async findArticle(id: string): Promise<Articles> {
        const params = {
            id
        }
        return await this.articlesRepository.findOne(params)
    }

    async create(params: Articles): Promise<Articles> {
        let article = new Articles()
        for (let key in params) {
            article[key] = params[key]
        }
        article.collection = 0
        article.like = 0
        article.views = 0
        return this.articlesRepository.save(article)
                    .then(res => {
                        return '新增文章成功'
                    })
                    .catch(err => {
                        return err
                    })
    }
}