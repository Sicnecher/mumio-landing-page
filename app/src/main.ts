import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { connect } from './data/connect.db';
import * as dotenv from 'dotenv';
dotenv.config()

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await connect(process.env.data_connect)
  await app.listen(3000);
}
bootstrap();
