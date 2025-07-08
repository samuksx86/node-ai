import { Provider } from '@nestjs/common';
import { EnvProvider } from 'src/_shared/infra/providers/env/env-provider';

import { EnvIocTypes } from '../env-ioc-types';

export class EnvProviderFactory {
  static generate(): Provider {
    return {
      provide: EnvIocTypes.ENV_PROVIDER,
      useFactory: () => {
        return new EnvProvider();
      },
      inject: [],
    };
  }
}
