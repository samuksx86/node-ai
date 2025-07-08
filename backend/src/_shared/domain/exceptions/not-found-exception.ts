import { HttpCodeEnum } from '~_shared/constants/http-code.enum';
import { Exception } from '~_shared/domain/exceptions/exception';

export class NotFoundException extends Exception {
  constructor() {
    super(HttpCodeEnum.NOT_FOUND, 'Resource not found.');
    this.name = 'NotFoundException';
  }
}
