import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { ZodSchema, ZodError } from 'zod';

export class ZodValidationPipe<T> implements PipeTransform<unknown, T> {
  constructor(private schema: ZodSchema<T>) {}

  transform(value: unknown, _metadata: ArgumentMetadata): T {
    try {
      const parsedValue = this.schema.parse(value);
      return parsedValue;
    } catch (error) {
      if (error instanceof ZodError) {
        const returnError = error.errors.map(err => {
          return {
            message: err.message,
            path: err.path,
          };
        });
        throw new BadRequestException(returnError);
      }
      throw error;
    }
  }
}
