import { Provider } from '@nestjs/common';

import { OpenaiIocTypes } from '~_shared/infra/ioc/openai/openai-ioc-types';
import { EmbeddingOpenai } from '~_shared/infra/openai/embedding-openai';

export class EmbeddingOpenaiFactory {
  static generate(): Provider {
    return {
      provide: OpenaiIocTypes.EMBEDDING_OPENAI,
      useFactory: () => {
        return new EmbeddingOpenai();
      },
      inject: [],
    };
  }
}
