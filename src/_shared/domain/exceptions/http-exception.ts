import { Exception } from '~_shared/domain/exceptions/exception';

export class HttpException extends Exception {
  constructor(code: number, message: string) {
    super(code, message);
    this.name = 'HttpException';
  }
}
