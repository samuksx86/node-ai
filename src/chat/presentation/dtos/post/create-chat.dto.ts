import { ApiProperty } from '@nestjs/swagger';

export class CreateChatRequestDTO {
  @ApiProperty({
    type: String,
    description: 'Message of the materials',
    example: 'Message...',
  })
  message: string;
}

export class CreateChatResponseDTO {
  @ApiProperty({
    type: String,
    description: 'Message of the materials',
    example: 'Message...',
  })
  message: string;
}
