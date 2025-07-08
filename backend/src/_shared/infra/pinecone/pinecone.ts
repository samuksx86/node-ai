import { Pinecone } from '@pinecone-database/pinecone';

import { IPinecone } from '~_shared/domain/contracts/pinecone';
import { PineconeDomain } from '~_shared/domain/entities/pinecone';

export class PineconeRepository implements IPinecone {
  private pc = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY || '',
  });
  private indexName = 'meu-indice';

  constructor() {}

  async create(domain: PineconeDomain): Promise<void> {
    const index = this.pc.index(this.indexName);

    const pineconeVectors = [
      {
        id: domain.id,
        values: domain.values,
        metadata: {
          text: domain.metadata.text,
        },
      },
    ];

    await index.upsert(pineconeVectors);
  }

  async findAll(embedding: number[]): Promise<PineconeDomain[]> {
    const index = this.pc.index(this.indexName);

    const result = await index.query({
      vector: embedding,
      topK: 5,
      includeMetadata: true,
    });

    return result.matches.map(match => {
      return new PineconeDomain({
        id: match.id,
        values: match.values!,
        metadata: {
          text: String(match.metadata?.text) || '',
        },
        score: match.score,
      });
    });
  }
}
