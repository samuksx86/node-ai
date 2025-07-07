import { Logger } from '@nestjs/common';

import { EnvSchema, envSchema } from './env.schema';

export class EnvProvider {
  private readonly env: EnvSchema;

  constructor() {
    const parsed = envSchema.safeParse(process.env);
    if (!parsed.success) {
      Logger.error(parsed.error.format());
      throw new Error('❌ Invalid environment variables.');
    }

    this.env = parsed.data;
  }

  get<T extends keyof EnvSchema>(key: T): EnvSchema[T] {
    return this.env[key];
  }

  getAll(): EnvSchema {
    return this.env;
  }
}
