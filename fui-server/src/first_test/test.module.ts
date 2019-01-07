import {Module} from '@nestjs/common'
import { TestController } from './test.controller';
import { TestService } from './test.service';

// 在Module里配置对应的 controller和service
@Module({
    imports: [],
    controllers: [TestController],
    providers: [TestService]
})

export class TestingModule {}