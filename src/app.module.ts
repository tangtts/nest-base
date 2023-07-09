import { Module, ValidationPipe } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CatModule } from "./cat/cat.module";
import { DogModule } from "./dog/dog.module";
import { DogService } from "./dog/dog.service";
import { CoreModule } from "./core/core.module";
import { ExceptionModule } from "./exception/exception.module";
import { APP_PIPE } from "@nestjs/core";
import { SharedModule } from "./shared/shared.module";

import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { UserModule } from "./user/user.module";

import { ConfigModule } from "@nestjs/config";
import configuration from "./config/configuration";

// 导入 CatsModule 的模块都可以访问 CatsService
@Module({
  imports: [
    ConfigModule.forRoot({
      // 开启全局
      isGlobal: true,
      // load: [configuration],
    }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "hello-mysql",
      entities: [User],
      synchronize: true,
    }),

    CatModule,
    DogModule,
    ExceptionModule,
    SharedModule,
    CoreModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({ validateCustomDecorators: true }),
    },
  ],
})
export class AppModule {}
