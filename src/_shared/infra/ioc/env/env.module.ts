import { Module, Logger } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { EnvProviderFactory } from './factories/env-provider.factory';

import { envSchema } from '~_shared/infra/providers/env/env.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      validate: config => {
        const parsed = envSchema.safeParse(config);

        if (!parsed.success) {
          Logger.error(
            'Invalid environment variables:',
            parsed.error.format(),
            'EnvModule',
          );
          throw new Error('Invalid environment variables');
        }
        Logger.log('Environment variables loaded successfully', 'EnvModule');

        return parsed.data;
      },
    }),
  ],
  controllers: [],
  providers: [EnvProviderFactory.generate()],
  exports: [EnvProviderFactory.generate()],
})
export class EnvModule {}
