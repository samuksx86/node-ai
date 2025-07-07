import { Provider } from '@nestjs/common';

import { ChatIocTypes } from '../../chat-ioc-types';

import { IMessageOpenAI } from '~_shared/domain/contracts/message-openai';
import { CreateChatUsecase } from '~chat/application/use-cases/create-chat/create-chat.usecase';

export class CreateChatFactory {
  static generate(): Provider {
    return {
      provide: ChatIocTypes.CREATE_CHAT,
      useFactory: (messageOpenAi: IMessageOpenAI) => {
        return new CreateChatUsecase(messageOpenAi);
      },
      inject: [ChatIocTypes.MESSAGE_OPENAI],
    };
  }
}
