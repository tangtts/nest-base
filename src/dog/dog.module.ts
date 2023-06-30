import { MiddlewareConsumer, Module, NestMiddleware, NestModule } from '@nestjs/common';
import { DogController } from './dog.controller';
import { DogService } from './dog.service';
import { CatService } from 'src/cat/cat.service';
import { NestMicroserviceOptions } from '@nestjs/common/interfaces/microservices/nest-microservice-options.interface';
import { LogMiddleware } from 'src/log/log.middleware';

@Module({
  controllers:[DogController],
  providers:[DogService],
  exports:[DogService],
})
export class DogModule implements NestModule {
  configure(consumer: MiddlewareConsumer){
    consumer.apply(LogMiddleware)
  }
}
