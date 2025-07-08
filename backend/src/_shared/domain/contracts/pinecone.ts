import { PineconeDomain } from '~_shared/domain/entities/pinecone';

export interface IPinecone {
  create(domain: PineconeDomain): Promise<void>;
  findAll(embedding: number[]): Promise<PineconeDomain[]>;
}
