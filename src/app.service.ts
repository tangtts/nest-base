import { CatService } from './cat/cat.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private CatService:CatService){}
  getHello(): string {
    return 'Hello World!';
  }
  cat(){
    return this.CatService.create({name:"lisi"})
  }
}
