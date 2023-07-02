import { BadRequestException, Controller, ForbiddenException, Get, HttpException, HttpStatus, NotAcceptableException, UnauthorizedException, UseFilters } from '@nestjs/common';
import { AllExceptionsFilter } from 'src/filter/any-exception.filter';
import { HttpExceptionFilter } from 'src/filter/http-exception.filter';
import { ExceptionService } from './exception.service';

@Controller('exception')
export class ExceptionController {
  constructor(private readonly exceptionService: ExceptionService) {
    
  }
  
  @Get()
  @UseFilters(AllExceptionsFilter)
  create(){
    // throw new UnauthorizedException()
  

      throw new Error('12131')
    
    throw new BadRequestException()
    throw new HttpException({
      status: HttpStatus.ACCEPTED,
      error: 'This is a custom message',
      a:10
    }, HttpStatus.ACCEPTED);
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN); 
  }
}
