import { OpenAI } from 'openai';

import {
  IMessageOpenAI,
  IMessageOpenAIInput,
  IMessageOpenAIOutput,
} from '~_shared/domain/contracts/message-openai';
import { NotFoundException } from '~_shared/domain/exceptions/not-found-exception';

export class MessageOpenai implements IMessageOpenAI {
  private openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  constructor() {}

  async execute(input: IMessageOpenAIInput): Promise<IMessageOpenAIOutput> {
    const chatResponse = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'Você é um assistente útil e direto.' },
        { role: 'user', content: input.question },
      ],
    });

    const choice = chatResponse.choices?.[0]?.message?.content?.trim();

    if (!choice) {
      throw new NotFoundException();
    }

    return {
      message: choice,
    };
  }
}
