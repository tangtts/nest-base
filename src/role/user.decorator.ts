import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common';
export const User = createParamDecorator((data: string, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  console.log(typeof data,"data")
  return 10000
});
