import { Provider } from '@nestjs/common';

import { MaterialsIocTypes } from '../../materials-ioc-types';

import { IEmbeddingOpenAI } from '~_shared/domain/contracts/embedding-openai';
import { IPinecone } from '~_shared/domain/contracts/pinecone';
import { CreateMaterialUsecase } from '~materials/application/use-cases/create-material/create-material.usecase';

export class CreateMaterialFactory {
  static generate(): Provider {
    return {
      provide: MaterialsIocTypes.CREATE_MATERIAL,
      useFactory: (
        embeddingOpenAI: IEmbeddingOpenAI,
        pineconeRepository: IPinecone,
      ) => {
        return new CreateMaterialUsecase(embeddingOpenAI, pineconeRepository);
      },
      inject: [MaterialsIocTypes.EMBEDDING_OPENAI, MaterialsIocTypes.PINECONE],
    };
  }
}
