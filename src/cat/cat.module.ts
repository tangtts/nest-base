import { LoggerService } from './../Logger/logger.service';
import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  controllers: [CatController],
  providers: [CatService],
  exports:[CatService],
  imports:[SharedModule],
})
export class CatModule {}
