import { HttpCodeEnum } from '~_shared/constants/http-code.enum';
import { Exception } from '~_shared/domain/exceptions/exception';

export class UnauthorizedException extends Exception {
  constructor() {
    super(HttpCodeEnum.UNAUTHORIZED, 'Unauthorized');
    this.name = 'UnauthorizedException';
  }
}
