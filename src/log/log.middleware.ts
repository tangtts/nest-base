import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response,Request } from 'express';

@Injectable()
export class LogMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log(res.status)
    next();
  }
}
