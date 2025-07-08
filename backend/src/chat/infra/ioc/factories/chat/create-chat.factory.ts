import { Provider } from '@nestjs/common';

import { ChatIocTypes } from '../../chat-ioc-types';

import { IEmbeddingOpenAI } from '~_shared/domain/contracts/embedding-openai';
import { IMessageOpenAI } from '~_shared/domain/contracts/message-openai';
import { IPinecone } from '~_shared/domain/contracts/pinecone';
import { CreateChatUsecase } from '~chat/application/use-cases/create-chat/create-chat.usecase';

export class CreateChatFactory {
  static generate(): Provider {
    return {
      provide: ChatIocTypes.CREATE_CHAT,
      useFactory: (
        messageOpenAi: IMessageOpenAI,
        embeddingOpenAI: IEmbeddingOpenAI,
        pineconeRepository: IPinecone,
      ) => {
        return new CreateChatUsecase(
          messageOpenAi,
          embeddingOpenAI,
          pineconeRepository,
        );
      },
      inject: [
        ChatIocTypes.MESSAGE_OPENAI,
        ChatIocTypes.EMBEDDING_OPENAI,
        ChatIocTypes.PINECONE,
      ],
    };
  }
}
