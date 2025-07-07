const SharedTokens = {
  MESSAGE_OPENAI: Symbol.for('MESSAGE_OPENAI'),
} as const;

const UseCaseTokens = {
  CREATE_CHAT: Symbol.for('CREATE_CHAT'),
} as const;

export const ChatIocTypes = {
  ...SharedTokens,
  ...UseCaseTokens,
} as const;
