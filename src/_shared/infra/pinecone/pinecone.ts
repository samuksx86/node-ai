import { Pinecone } from '@pinecone-database/pinecone';

import { IPinecone } from '~_shared/domain/contracts/pinecone';
import { PineconeDomain } from '~_shared/domain/entities/pinecone';

export class PineconeRepository implements IPinecone {
  private pc = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY || '',
  });
  private indexName = 'meu-indice';

  constructor() {}

  async create(input: PineconeDomain): Promise<void> {
    const index = this.pc.index(this.indexName);

    const pineconeVectors = [
      {
        id: input.id,
        values: input.values,
        metadata: {
          text: input.metadata.text,
        },
      },
    ];

    await index.upsert(pineconeVectors);
  }
}
