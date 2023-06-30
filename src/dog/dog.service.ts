import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  create(createCatDto) {
    return 'This action adds a new dog';
  }
}
