import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { DogModule } from './dog/dog.module';
import { DogService } from './dog/dog.service';
import { CoreModule } from './core/core.module';

// 导入 CatsModule 的模块都可以访问 CatsService
@Module({
  imports: [CatModule, DogModule, CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
