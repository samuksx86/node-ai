export interface CreateChatContract {
  execute(input: CreateChatInput): Promise<CreateChatOutput>;
}

export type CreateChatInput = {
  message: string;
};

export type CreateChatOutput = {
  message: string;
};
