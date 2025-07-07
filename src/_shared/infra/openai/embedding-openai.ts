import { OpenAI } from 'openai';

import { HttpCodeEnum } from '~_shared/constants/http-code.enum';
import {
  IEmbeddingOpenAI,
  IEmbeddingOpenAIInput,
  IEmbeddingOpenAIOutput,
} from '~_shared/domain/contracts/embedding-openai';
import { Exception } from '~_shared/domain/exceptions/exception';

export class EmbeddingOpenai implements IEmbeddingOpenAI {
  private openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  constructor() {}

  async execute(input: IEmbeddingOpenAIInput): Promise<IEmbeddingOpenAIOutput> {
    const chatResponse = await this.openai.embeddings.create({
      model: 'text-embedding-ada-002',
      input: input.text,
    });

    const embeddings = chatResponse.data[0].embedding;

    if (!embeddings || embeddings.length === 0) {
      throw new Exception(
        HttpCodeEnum.NOT_FOUND,
        'No embeddings found for the provided text.',
      );
    }

    return {
      embeddings,
    };
  }
}
