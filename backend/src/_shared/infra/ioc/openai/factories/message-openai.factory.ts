import { Provider } from '@nestjs/common';

import { OpenaiIocTypes } from '~_shared/infra/ioc/openai/openai-ioc-types';
import { MessageOpenai } from '~_shared/infra/openai/message-openai';

export class MessageOpenaiFactory {
  static generate(): Provider {
    return {
      provide: OpenaiIocTypes.MESSAGE_OPENAI,
      useFactory: () => {
        return new MessageOpenai();
      },
      inject: [],
    };
  }
}
