import { SharedService } from './../shared/shared.service';
import { Injectable } from '@nestjs/common';
import { LoggerService } from './../Logger/logger.service';

@Injectable()
export class CatService {
  constructor(
    private readonly loggerService: LoggerService,
    private readonly sharedService: SharedService,
  ){}
  create(createCatDto) {
    this.loggerService.logger();
    this.sharedService.sharedS()
    return 'This action adds a new cat createCatDto';
  }
}
