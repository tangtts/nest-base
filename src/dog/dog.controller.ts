import { Controller, Post } from '@nestjs/common';
import { DogService } from './dog.service';
import { CatService } from 'src/cat/cat.service';

@Controller('dog')
export class DogController {
  constructor(
    private readonly dogService: DogService,
    ) {}

  @Post()
  create() {
    return this.dogService.create({name:"zs"});
  }



}
