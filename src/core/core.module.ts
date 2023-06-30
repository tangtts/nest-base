import { Module } from '@nestjs/common';
import { CoreService } from './core.service';
import { CoreController } from './core.controller';
import { CatModule } from 'src/cat/cat.module';
import { DogModule } from 'src/dog/dog.module';
import { CatService } from 'src/cat/cat.service';
import { DogService } from 'src/dog/dog.service';

@Module({
  imports:[CatModule,DogModule],
  controllers: [CoreController],
  providers: [CoreService,CatService,DogService]
})
export class CoreModule {}
