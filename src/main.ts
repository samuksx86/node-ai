import 'reflect-metadata';

import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

import { HttpExceptionFilter } from '~_shared/infra/filters/nestjs-exception-filter';

const DEFAULT_PORT = 8080;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.CORS_URL ?? '*',
  });

  app.useGlobalFilters(new HttpExceptionFilter());
  const conf = new DocumentBuilder()
    .setTitle('API')
    .addBearerAuth()
    .setDescription('API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, conf);
  SwaggerModule.setup('docs', app, document);
  await app.listen(process.env.PORT ?? DEFAULT_PORT);
}
bootstrap().catch(err => console.error('Error starting application:', err));
