import { ApiProperty } from '@nestjs/swagger';

export class CreateMaterialResponseDTO {
  @ApiProperty({
    type: String,
    description: 'Name or path of the uploaded file',
    example: 'uploads/myfile.pdf',
  })
  file: string;

  @ApiProperty({
    type: Number,
    description: 'Chunk number of the material',
    example: 1,
  })
  chunk: number;

  @ApiProperty({
    type: String,
    description: 'Text content of the material',
    example: 'This is a chunk of the material text.',
  })
  text: string;

  @ApiProperty({
    type: [Number],
    description: 'Embedding data',
    example: {
      embeddings: [0.1, 0.2, 0.3],
    },
  })
  embedding: number[];
}
