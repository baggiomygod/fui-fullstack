# 1. nestjs

## 1. nestjs使用
- main.ts 应用的入口文件。它使用nestFactory用来创建Nest应用实例
- app.module.ts 定义AppModule应用程序的根模块
- app.controller.ts 带有单个路由的基本控制器示例
1. main.ts

## 1. 控制器Controllers
控制器层负责处理传入的请求，并返回对客户端的响应。
控制器应处理HTTP请求并将复杂的任务他委托给**服务service**。


控制器的目的是接收应用的特定请求。通常，每个控制器有多个路由，不同的路由可以执行不同的操作。

为了创建一个基本的控制器，我们必须使用**装饰器**。装饰器将类与所需的元数据关联，并使nest能够创建路由映射（将请求绑定到相应的控制器）
### 1. 路由

### 2. Request对象

### 3. 资源
nestjs可以返回一个rxjs objervable流，nest将自动订阅下面的原并获取最后发出的值
```
import { Observable, of } from 'rxjs';
@Controller('articles')
export class articlesController {
    constructor (private readonly articlesService: articlesService) {
    }
    @Get(':id')
        findArticle(@Param() params): Observable<any> { // nestjs可以返回一个rxjs objervable流，nest将自动订阅下面的原并获取最后发出的值
            return of(this.articlesService.findArticle(params.id))
        }
}
```

### 4. 请求负载
```DTO```（数据传输对象）架构。DTO是一个定义如何通过网络发送数据的对象。我们可以通过typescript接口或简单的类类完成（nest中建议使用类，因为
类是es6标准的一部分，所以它们知识简单的函数。另一方面，typescript接口在编译过程中会被删除，nest不能引用它们。）这一点很重要，因为**pipes**
等特性能够在访问变量的元类型时提供更多的可能性

> articles.dto.ts
```
// 三个基本属性，所有这些都被标记为只读，因为我们应该尽可能地使我们的函数纯净
export class CreateArticleDto{
    readonly size: number
    readonly page: number
}
```
> article.controller.ts
```
import {Get, Post, Controller, HttpStatus, Param, Query, Body, HttpCode, Res, Req, Header} from '@nestjs/common';
import {articlesService} from './articles.service'
import {Articles} from '../app-entities/articles.entity'
import { Observable, of } from 'rxjs';
// DTO
import {CreateArticleDto, ArticlesQueryDto} from './articles.dto'

@Controller('articles')
export class articlesController {
    constructor (private readonly articlesService: articlesService) {
    }
    @Post('/add')
    @Header('Cache-Control', 'none') // 自定义响应头
    @HttpCode(200) // nest默认post请求成功返回201，可以通过HttpCode(...)修改
    async create(@Req() request, @Body() params: CreateArticleDto): Promise<Articles> {
        // res.status(HttpStatus.CREATED).send();
        return this.articlesService.create(params)
    }
}

```

### ...

## 2. 提供者Providers
几乎所有东西都可以是Providers: service, repository, factory helper等等。他们都可以通过```constructor```注入依赖关系，也就是说，他们可以创建各种关系。但事实上，Providers不过是一个用一个```@Injectable()```装饰器注解的简单类

Providders是纯粹的javascript类，其上方有```@Injectable()```装饰器
### @Injectable()
在 Nest 中，要把一个类定义为服务，就要用 @Injectable 装饰器来提供元数据，以便让 Nest 可以把它作为依赖注入到控制器中。

> 由于Nest可以以更多的面向对象方式设计和组织依赖，因此我们强烈建议遵循SOLID原则

