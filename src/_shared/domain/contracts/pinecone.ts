import { PineconeDomain } from '~_shared/domain/entities/pinecone';

export interface IPinecone {
  create(input: PineconeDomain): Promise<void>;
}
