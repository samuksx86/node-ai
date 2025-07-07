import { Provider } from '@nestjs/common';

import { HttpClientIocTypes } from '../http-client-ioc-types';

import { AxiosHttpClient } from '~_shared/infra/providers/http-client/axios/axios-http-client';

export class HttpClientFactory {
  static generate(): Provider {
    return {
      provide: HttpClientIocTypes.HTTP_CLIENT,
      useFactory: () => {
        return new AxiosHttpClient();
      },
      inject: [],
    };
  }
}
