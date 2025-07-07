import { HttpCodeEnum } from '~_shared/constants/http-code.enum';
import { Exception } from '~_shared/domain/exceptions/exception';

export class RevokedTokenException extends Exception {
  constructor() {
    const message = 'Token was revoked.';
    super(HttpCodeEnum.UNAUTHORIZED, message);
    this.name = 'RevokedTokenException';
  }
}
