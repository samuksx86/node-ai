import { HttpCodeEnum } from '~_shared/constants/http-code.enum';
import { Exception } from '~_shared/domain/exceptions/exception';

export class FileUploadException extends Exception {
  constructor() {
    super(HttpCodeEnum.UNAUTHORIZED, 'Have a problem uploading the file.');
    this.name = 'FileUploadException';
  }
}
