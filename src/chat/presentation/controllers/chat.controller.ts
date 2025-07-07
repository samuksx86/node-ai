import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import {
  CreateChatRequestDTO,
  CreateChatResponseDTO,
} from '../dtos/post/create-chat.dto';

import { HttpCodeEnum } from '~_shared/constants/http-code.enum';
import { ZodValidationPipe } from '~_shared/infra/providers/validation-pipe/zod-validation-pipe';
import { CreateChatContract } from '~chat/application/use-cases/create-chat/create-chat.contract';
import { ChatIocTypes } from '~chat/infra/ioc/chat-ioc-types';
import { createChatValidator } from '~chat/presentation/dtos/validators/chat/create-chat.validator';

@Controller('chat')
export class ChatController {
  constructor(
    @Inject(ChatIocTypes.CREATE_CHAT)
    private readonly createChat: CreateChatContract,
  ) {}

  @Post()
  @ApiResponse({
    status: HttpCodeEnum.CREATED,
    description: 'Chat created successfully',
    type: CreateChatResponseDTO,
  })
  async create(
    @Body(new ZodValidationPipe(createChatValidator))
    input: CreateChatRequestDTO,
  ): Promise<CreateChatResponseDTO> {
    return this.createChat.execute(input);
  }
}
