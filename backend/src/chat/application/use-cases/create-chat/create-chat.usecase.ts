import {
  CreateChatContract,
  CreateChatInput,
  CreateChatOutput,
} from './create-chat.contract';

import { IEmbeddingOpenAI } from '~_shared/domain/contracts/embedding-openai';
import { IMessageOpenAI } from '~_shared/domain/contracts/message-openai';
import { IPinecone } from '~_shared/domain/contracts/pinecone';
import { PineconeDomain } from '~_shared/domain/entities/pinecone';

export class CreateChatUsecase implements CreateChatContract {
  constructor(
    private readonly messageOpenAI: IMessageOpenAI,
    private readonly embeddingOpenAI: IEmbeddingOpenAI,
    private readonly pineconeRepository: IPinecone,
  ) {}

  async execute(input: CreateChatInput): Promise<CreateChatOutput> {
    const embedding = await this.embeddingOpenAI.execute({
      text: input.message,
    });

    const ranking = await this.pineconeRepository.findAll(embedding.embeddings);

    console.log('\n🔍 Resultados do Ranking:');
    ranking.forEach((m, i) => {
      console.log(`\n[Chunk ${i + 1}] score: ${m.score}`);
      console.log(`${m.metadata.text.substring(0, 200)}...`);
    });

    const message = await this.reRank(input.message, ranking);

    return { message };
  }

  private async reRank(
    question: string,
    rankings: PineconeDomain[],
  ): Promise<string> {
    const chunks = rankings
      .map(
        (ranking, i) =>
          `Trecho ${i + 1} - Score ${ranking.score}:\n${ranking.metadata.text.trim()}`,
      )
      .join('\n\n');

    const prompt = `
      Você é um assistente que ajuda a encontrar a melhor resposta para uma pergunta com base em trechos de texto.

      Pergunta do usuário:
      "${question}"

      Aqui estão os trechos encontrados (com seus scores de relevância):
      ${chunks}

      Instruções:
      1. Escolha o trecho com o **maior score** que também responda de forma coerente à pergunta.
      2. Se nenhum dos trechos realmente responder à pergunta de forma adequada, diga:
         "Nenhum dos trechos responde claramente à pergunta."
      3. Se houver um trecho adequado, faça duas coisas:
         a) Identifique qual trecho foi escolhido (exemplo: "Trecho 1")
         b) Resuma o conteúdo desse trecho em 2 a 3 frases, respondendo claramente à pergunta do usuário, de forma natural e sem copiar integralmente o texto.
      4. Não inclua o número do trecho, nem a palavra 'Resumo:', nem nenhuma outra marcação — apenas o texto final resumido, pronto para ser mostrado ao usuário.
    `;

    const chatResponse = await this.messageOpenAI.execute({ question: prompt });

    return chatResponse.message;
  }
}
