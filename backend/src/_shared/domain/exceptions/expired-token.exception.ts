import { HttpCodeEnum } from '~_shared/constants/http-code.enum';
import { Exception } from '~_shared/domain/exceptions/exception';

export class ExpiredTokenException extends Exception {
  constructor() {
    super(HttpCodeEnum.UNAUTHORIZED, 'The token is expired.');
    this.name = 'ExpiredTokenException';
  }
}
