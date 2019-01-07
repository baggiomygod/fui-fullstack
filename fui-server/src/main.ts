import { NestFactory } from '@nestjs/core';
import { AppModule } from 'app.module';
import * as cors from 'cors';  // 后续用 CorsMiddleware
const corsConfig = {
  origin: ['http://localhost:3000'], 
  credentials: true
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors(corsConfig));

  await app.listen(8000);
}
bootstrap();
