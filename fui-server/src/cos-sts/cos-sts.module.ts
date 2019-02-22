import { Module } from '@nestjs/common';
import { CosStsController } from './cos-sts.controller';
import { CosStsService } from './cos-sts.service';

@Module({
    imports: [],
    providers: [CosStsService],
    controllers: [CosStsController]
})
export class CosStsModule {
}