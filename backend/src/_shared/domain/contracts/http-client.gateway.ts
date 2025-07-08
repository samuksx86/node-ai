import { HttpMethodEnum } from '~_shared/constants/http-method.enum';

type ResponseType =
  | 'arraybuffer'
  | 'blob'
  | 'document'
  | 'json'
  | 'text'
  | 'stream'
  | 'formdata';

export type HttpClientContractInput = {
  method: HttpMethodEnum;
  url: string;
  headers?: object;
  body?: object;
  responseType?: ResponseType;
};

export interface HttpClientContractContract {
  request<Output = void>(input: HttpClientContractInput): Promise<Output>;
}
