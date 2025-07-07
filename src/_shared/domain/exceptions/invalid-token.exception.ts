import { HttpCodeEnum } from '~_shared/constants/http-code.enum';
import { Exception } from '~_shared/domain/exceptions/exception';

export class InvalidTokenException extends Exception {
  constructor() {
    super(HttpCodeEnum.UNAUTHORIZED, 'The token is invalid.');
    this.name = 'InvalidTokenException';
  }
}
