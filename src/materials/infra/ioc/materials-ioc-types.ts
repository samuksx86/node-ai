const SharedTokens = {
  EMBEDDING_OPENAI: Symbol.for('EMBEDDING_OPENAI'),
} as const;

const UseCaseTokens = {
  CREATE_MATERIAL: Symbol.for('CREATE_MATERIAL'),
} as const;

export const MaterialsIocTypes = {
  ...SharedTokens,
  ...UseCaseTokens,
} as const;
