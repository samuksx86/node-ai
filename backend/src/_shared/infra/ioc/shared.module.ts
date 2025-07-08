import { Global, Module } from '@nestjs/common';

import { EnvModule } from './env/env.module';
import { HttpClientModule } from './http-client/http-client.module';

import { OpenaiModule } from '~_shared/infra/ioc/openai/openai.module';
import { PineconeModule } from '~_shared/infra/ioc/pinecone/pinecone.module';

const modules = [EnvModule, HttpClientModule, OpenaiModule, PineconeModule];

@Global()
@Module({
  imports: modules,
  exports: modules,
})
export class SharedModule {}
