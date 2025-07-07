import pdf from 'pdf-parse';

import {
  CreateMaterialContract,
  CreateMaterialInput,
  CreateMaterialOutput,
} from './create-material.contract';

import { IEmbeddingOpenAI } from '~_shared/domain/contracts/embedding-openai';

const CHUNK_SIZE = 500;

export class CreateMaterialUsecase implements CreateMaterialContract {
  constructor(private readonly embeddingOpenAI: IEmbeddingOpenAI) {}

  async execute(file: CreateMaterialInput): Promise<CreateMaterialOutput[]> {
    console.log(
      '📄 Iniciando a geração de vetores para o material:',
      file.originalname,
    );

    const allVectors: CreateMaterialOutput[] = [];

    const fileText = await this.extractTextFromPdf(file.buffer);
    const chunks = this.generateChunks(fileText);

    for (const [i, chunk] of chunks.entries()) {
      console.log('🔍 Processando chunk:', i + 1, 'de', chunks.length);
      const embedding = await this.embeddingOpenAI.execute({ text: chunk });

      allVectors.push({
        file: file.originalname,
        chunk: i,
        text: chunk,
        embedding: embedding.embeddings,
      });

      console.log(`✅ Chunk ${i + 1} de ${file.originalname} gerado`);
    }

    return allVectors;
  }

  private async extractTextFromPdf(buffer: Buffer): Promise<string> {
    const pdfData = await pdf(buffer);
    return pdfData.text;
  }

  private generateChunks(text: string, chunkSize = CHUNK_SIZE): string[] {
    const words = text.split(/\s+/);
    const chunks: string[] = [];

    for (let i = 0; i < words.length; i += chunkSize) {
      chunks.push(words.slice(i, i + chunkSize).join(' '));
    }

    return chunks;
  }
}
