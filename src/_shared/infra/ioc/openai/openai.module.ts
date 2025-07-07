import { Module } from '@nestjs/common';

import { MessageOpenaiFactory } from './factories/message-openai.factory';

import { EmbeddingOpenaiFactory } from '~_shared/infra/ioc/openai/factories/embedding-openai.factory';

@Module({
  imports: [],
  controllers: [],
  providers: [
    MessageOpenaiFactory.generate(),
    EmbeddingOpenaiFactory.generate(),
  ],
  exports: [MessageOpenaiFactory.generate(), EmbeddingOpenaiFactory.generate()],
})
export class OpenaiModule {}
