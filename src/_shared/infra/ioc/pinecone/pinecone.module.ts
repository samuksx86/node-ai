import { Module } from '@nestjs/common';

import { PineconeFactory } from './factories/pinecone.factory';

@Module({
  imports: [],
  controllers: [],
  providers: [PineconeFactory.generate()],
  exports: [PineconeFactory.generate()],
})
export class PineconeModule {}
