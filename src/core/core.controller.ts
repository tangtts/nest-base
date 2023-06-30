import { Controller, Get } from "@nestjs/common";
import { CoreService } from "./core.service";
import { DogService } from "src/dog/dog.service";

@Controller("core")
export class CoreController {
  constructor(
    private readonly coreService: CoreService,
    private readonly dogService: DogService
  ) {}
  @Get()
  core() {
   return this.dogService.create(100)
  }
}
