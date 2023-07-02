import { Injectable } from "@nestjs/common";


@Injectable()
export class SharedService {
  sharedS(){
    console.log("shared")
  }
}