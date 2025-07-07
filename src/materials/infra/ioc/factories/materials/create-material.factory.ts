import { Provider } from '@nestjs/common';

import { MaterialsIocTypes } from '../../materials-ioc-types';

import { IEmbeddingOpenAI } from '~_shared/domain/contracts/embedding-openai';
import { CreateMaterialUsecase } from '~materials/application/use-cases/create-material/create-material.usecase';

export class CreateMaterialFactory {
  static generate(): Provider {
    return {
      provide: MaterialsIocTypes.CREATE_MATERIAL,
      useFactory: (embeddingOpenAI: IEmbeddingOpenAI) => {
        return new CreateMaterialUsecase(embeddingOpenAI);
      },
      inject: [MaterialsIocTypes.EMBEDDING_OPENAI],
    };
  }
}
