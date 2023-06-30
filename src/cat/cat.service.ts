import { Injectable } from '@nestjs/common';


@Injectable()
export class CatService {
  create(createCatDto) {
    return 'This action adds a new cat';
  }
}
