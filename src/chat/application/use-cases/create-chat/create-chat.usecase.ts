import {
  CreateChatContract,
  CreateChatInput,
  CreateChatOutput,
} from './create-chat.contract';

import { IMessageOpenAI } from '~_shared/domain/contracts/message-openai';

export class CreateChatUsecase implements CreateChatContract {
  constructor(private readonly messageOpenAI: IMessageOpenAI) {}

  async execute(input: CreateChatInput): Promise<CreateChatOutput> {
    return this.messageOpenAI.execute({
      question: input.message,
    });
  }
}
