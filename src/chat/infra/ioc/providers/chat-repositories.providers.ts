import { CreateChatFactory } from '~chat/infra/ioc/factories/chat/create-chat.factory';

export const useCaseProviders = [CreateChatFactory.generate()];
