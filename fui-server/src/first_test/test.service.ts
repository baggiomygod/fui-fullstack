import {Injectable} from '@nestjs/common'

@Injectable()
export class TestService {
    test(): string {

        return 'test...'
    }

    testId(): string {
        return 'test id...'
    }
}