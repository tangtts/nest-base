import { Controller, Get, HttpCode, Param, Post, Res } from "@nestjs/common";
import { AppService } from "./app.service";
import { Response } from "express";
import { Request } from "express";
@Controller("app")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("getHello")
  getHello(@Res({ passthrough: true }) res: Response): string {
    res.status(200);
    return this.appService.getHello();
  }

  @Get("cat")
  cat(@Res({ passthrough: true }) res: Response): string {
   return this.appService.cat()
  }

  @Post("httpCode")
  @HttpCode(201)
  create() {
    return "This action adds a new cat";
  }

  @Get(":id/:name")
  param(@Param("id") id, @Param("name") name):string {
    return id + name;
  }




}
