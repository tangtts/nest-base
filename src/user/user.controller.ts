import { User } from "src/role/user.decorator";
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Inject,
  Param,
  ParseArrayPipe,
  ParseFilePipeBuilder,
  Post,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { ConfigService,ConfigType } from "@nestjs/config";
import { IsNumberString } from "class-validator";
import { findSourceMap } from "module";
import configuration, { ConfigurationType } from "src/config/configuration";
import { UsersService } from "./user.service";

import { PickType, OmitType, PartialType } from "@nestjs/mapped-types";
import { UserDTO } from "src/dto/user.dto";
import { FileInterceptor } from "@nestjs/platform-express";

class FindOneParams {
  @IsNumberString() // "1"
  id: number;
}

class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

class UpdateCatAgeDto extends PickType(CreateCatDto, ["age"] as const) {}
class UpdateCatDto extends OmitType(CreateCatDto, ["name"] as const) {}

class UpdateCatDto2 extends PartialType(
  OmitType(CreateCatDto, ["name"] as const)
) {}

const a: UpdateCatAgeDto = {
  age: 10,
};

@Controller("user")
export class UserController {
  constructor(
    private readonly userService: UsersService,
    private configService: ConfigService<Record< ConfigurationType,unknown>>
  ) {}

  @Post("create")
  @UsePipes(new ValidationPipe({ whitelist: true }))
  @UseInterceptors(ClassSerializerInterceptor)
  createOne(@Body() user: UserDTO) {
    console.log(user);
    return this.userService.createOne(user);
  }

  //   @UploadedFile(
//     new ParseFilePipeBuilder()
//     .addFileTypeValidator({
//       fileType: 'jpg',
//     })
//     .build(),
// )
  @Post("upload")
  @UseInterceptors(FileInterceptor("file"))
  uploadFile(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: "png",
        })
        .build({
          fileIsRequired: true,
        })
    )
    file: Express.Multer.File,
  ) {
    console.log(file);
    return file.size
  }

  @Post("array")
  createBulk(
    @Body(new ParseArrayPipe({ items: FindOneParams, }))
    createUserDtos: FindOneParams[]
  ) {
    console.log(createUserDtos[1].id);
    return "This action adds new users";
  }

  // whiteList 可以去除
  // transform 可以把 id 从 字符串转为 数字
  @UsePipes(new ValidationPipe({ whitelist: true }))
  @Post()
  // @Body(new ParseArrayPipe({ items: CreateUserDto }))
  findOne(@Body() body: FindOneParams) {
    console.log(body); // true
    return "This action returns a user";
  }

  @Get("findOne/:id")
  @UseInterceptors(ClassSerializerInterceptor)
  find(@Param() params: FindOneParams) {
    // let x:ConfigurationType = "env"
    const dbHost = this.configService.get<string>("env");
    return this.userService.findOne("8");
  }
}
