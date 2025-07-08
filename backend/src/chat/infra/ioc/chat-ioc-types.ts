const SharedTokens = {
  MESSAGE_OPENAI: Symbol.for('MESSAGE_OPENAI'),
  EMBEDDING_OPENAI: Symbol.for('EMBEDDING_OPENAI'),
  PINECONE: Symbol.for('PINECONE'),
} as const;

const UseCaseTokens = {
  CREATE_CHAT: Symbol.for('CREATE_CHAT'),
} as const;

export const ChatIocTypes = {
  ...SharedTokens,
  ...UseCaseTokens,
} as const;
