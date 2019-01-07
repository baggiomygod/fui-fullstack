import {Get, Controller} from '@nestjs/common'
import {TestService} from './test.service' // 引入service文件

// 处理/test请求路径
@Controller('test') 
export class TestController {
    constructor(private readonly TestService: TestService) {}

    @Get() // /test
    test():string{
        return this.TestService.test()
    }

    @Get(':id') // /test/:id
    testId(): string {
        return this.TestService.testId()
    }
}