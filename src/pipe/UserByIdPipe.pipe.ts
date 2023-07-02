import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class userByIdPipe implements PipeTransform<string, number> {
  transform(value: string, metadata: ArgumentMetadata): number {
    let val = parseInt( value,10)
    if (![1,2,3].includes(val)) {
      throw new BadRequestException('Validation failed');
    }
    return val;
  }
}
