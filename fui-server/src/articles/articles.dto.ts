export class CreateArticleDto{
    readonly size: number
    readonly page: number
}

export class ArticlesQueryDto {
    readonly size?: number
    readonly page: number
}