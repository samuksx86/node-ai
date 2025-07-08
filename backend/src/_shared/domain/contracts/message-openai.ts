export interface IMessageOpenAI {
  execute(input: IMessageOpenAIInput): Promise<IMessageOpenAIOutput>;
}

export interface IMessageOpenAIInput {
  question: string;
}

export interface IMessageOpenAIOutput {
  message: string;
}
