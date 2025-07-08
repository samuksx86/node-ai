import { EnvSchema } from '~_shared/infra/providers/env/env.schema';

declare global {
  namespace NodeJS {
    interface ProcessEnv extends EnvSchema {
      [key: string]: string | undefined;
    }
  }
}
