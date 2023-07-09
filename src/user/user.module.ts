import { applyDecorators, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { UsersService } from './user.service';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import {join} from "path"

@Module({
  imports:[TypeOrmModule.forFeature([User]),ConfigModule,
  ],
  controllers: [UserController],
  providers: [UsersService]
})
export class UserModule {}
