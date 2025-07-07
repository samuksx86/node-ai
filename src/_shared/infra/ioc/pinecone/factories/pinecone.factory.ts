import { Provider } from '@nestjs/common';

import { PineconeIocTypes } from '~_shared/infra/ioc/pinecone/pinecone-ioc-types';
import { PineconeRepository } from '~_shared/infra/pinecone/pinecone';

export class PineconeFactory {
  static generate(): Provider {
    return {
      provide: PineconeIocTypes.PINECONE,
      useFactory: () => {
        return new PineconeRepository();
      },
      inject: [],
    };
  }
}
