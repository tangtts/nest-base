import { IsString, isString } from "class-validator"


export class UserDTO{

  @IsString()
  firstName: string

  @IsString()
  lastName: string

  @IsString()
  password: string

  @IsString()
  password2: string

  
  obj:Object
}