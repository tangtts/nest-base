import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { DogModule } from './dog/dog.module';
import { DogService } from './dog/dog.service';
import { CoreModule } from './core/core.module';
import { ExceptionModule } from './exception/exception.module';
import { APP_PIPE } from '@nestjs/core';
import { SharedModule } from './shared/shared.module';

// 导入 CatsModule 的模块都可以访问 CatsService
@Module({
  imports: [CatModule, DogModule, ExceptionModule,SharedModule,CoreModule],
  controllers: [AppController],
  providers: [AppService,{
    provide: APP_PIPE,
    useValue: new ValidationPipe({ validateCustomDecorators: true }),
  },],
})
export class AppModule {}
