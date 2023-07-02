import { Injectable, Scope } from "@nestjs/common";

@Injectable()
export class LoggerService {
  logger(){
    console.log("LoggerController")
  }
}