import { SharedService } from './shared.service';
import { LogerModule } from './../Logger/shared.module';
import { Module } from "@nestjs/common";
import { SharedController } from "./shared.controller";


@Module({
  imports:[LogerModule],
  providers:[SharedService],
  controllers:[SharedController],
  exports:[LogerModule,SharedService]
})
export class SharedModule {

}