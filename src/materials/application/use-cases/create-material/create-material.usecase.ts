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

  async execute(input: CreateMaterialInput): Promise<CreateMaterialOutput[]> {
    console.log(
      '📄 Iniciando a geração de vetores para o material:',
      input.file.name,
    );

    const allVectors: CreateMaterialOutput[] = [];

    const { file } = input;

    const fileText = await this.extractTextFromPdf(file);
    const chunks = this.generateChunks(fileText);

    for (const [i, chunk] of chunks.entries()) {
      console.log('🔍 Processando chunk:', i + 1, 'de', chunks.length);
      const embedding = await this.embeddingOpenAI.execute({ text: chunk });

      allVectors.push({
        file: file.name,
        chunk: i,
        text: chunk,
        embedding: embedding.embeddings,
      });

      console.log(`✅ Chunk ${i + 1} de ${file.name} gerado`);
    }

    return allVectors;
  }

  private async extractTextFromPdf(file: File): Promise<string> {
    const arrayBuffer = await file.arrayBuffer();
    const dataBuffer = Buffer.from(arrayBuffer);

    const pdfData = await pdf(dataBuffer);
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
