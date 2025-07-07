import { Module } from '@nestjs/common';

import { useCaseProviders } from './providers/chat-repositories.providers';

import { ChatController } from '~chat/presentation/controllers/chat.controller';

const providerModules = [...useCaseProviders];

@Module({
  imports: [],
  controllers: [ChatController],
  providers: providerModules,
  exports: providerModules,
})
export class ChatModule {}
