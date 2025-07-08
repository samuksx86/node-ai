import axios from 'axios';

import { HttpCodeEnum } from '~_shared/constants/http-code.enum';
import {
  HttpClientContractContract,
  HttpClientContractInput,
} from '~_shared/domain/contracts/http-client.gateway';
import { HttpException } from '~_shared/domain/exceptions/http-exception';

export class AxiosHttpClient implements HttpClientContractContract {
  async request<Output = void>({
    method,
    url,
    headers,
    body,
    responseType,
  }: HttpClientContractInput): Promise<Output> {
    try {
      const { data } = await axios<Output>({
        method,
        url,
        data: body,
        headers,
        responseType,
      });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new HttpException(
          error.response?.status ?? HttpCodeEnum.INTERNAL_SERVER_ERROR,
          JSON.stringify(error.response?.data),
        );
      }
      throw new HttpException(
        HttpCodeEnum.INTERNAL_SERVER_ERROR,
        error instanceof Error ? error.message : 'Unknown error',
      );
    }
  }
}
