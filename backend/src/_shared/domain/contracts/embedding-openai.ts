export interface IEmbeddingOpenAI {
  execute(input: IEmbeddingOpenAIInput): Promise<IEmbeddingOpenAIOutput>;
}

export interface IEmbeddingOpenAIInput {
  text: string;
}

export interface IEmbeddingOpenAIOutput {
  embeddings: number[];
}
