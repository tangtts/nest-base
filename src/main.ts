import { HttpExceptionFilter } from 'src/filter/http-exception.filter';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './filter/any-exception.filter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.useGlobalFilters(new AllExceptionsFilter ())
  app.useGlobalPipes(
    new ValidationPipe({
      // 过滤非 dto 属性
      // whitelist: true,
      // 可以做类型转化
      // transform: true,
      // validateCustomDecorators:true
      // forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3030);
}
bootstrap();
