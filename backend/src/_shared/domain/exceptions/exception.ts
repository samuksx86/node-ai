import { HttpCodeEnum } from '~_shared/constants/http-code.enum';

export class Exception extends Error {
  code: number;
  message: string;
  constructor(code: HttpCodeEnum, message: string) {
    super(message);
    this.code = code;
    this.message = message;
  }
}
