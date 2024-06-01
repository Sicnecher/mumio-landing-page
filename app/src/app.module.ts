import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './api/product/product.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
const filePath = join(__dirname, '..', '..', 'client', 'dist', 'client', 'browser')

@Module({
  imports: [
    ProductModule,
    ServeStaticModule.forRoot({
      rootPath: filePath // Serve Angular html file
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}