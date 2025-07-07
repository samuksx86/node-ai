import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

import { HttpCodeEnum } from '~_shared/constants/http-code.enum';
import { Exception } from '~_shared/domain/exceptions/exception';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: Exception | Error, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();

    console.error(exception);

    const response = ctx.getResponse<Response>();

    if (exception instanceof Exception) {
      response.status(exception.code).json({
        error: exception.message,
        code: exception.name,
      });
    } else if (exception instanceof HttpException) {
      const res = exception.getResponse();
      response.status(exception.getStatus()).json({
        error: (res as { message: string })?.message ?? exception.message,
        code: exception.name,
      });
    } else {
      response.status(HttpCodeEnum.INTERNAL_SERVER_ERROR).json({
        error:
          process.env.NODE_ENV === 'production'
            ? HttpCodeEnum.INTERNAL_SERVER_ERROR
            : exception instanceof Error
              ? exception.stack
              : String(exception),
        code: exception instanceof Error ? exception.name : 'UnknownError',
      });
    }
  }
}
