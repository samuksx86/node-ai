import { Module } from '@nestjs/common';

import { HttpClientFactory } from './factories/http-client.factory';

@Module({
  imports: [],
  controllers: [],
  providers: [HttpClientFactory.generate()],
  exports: [HttpClientFactory.generate()],
})
export class HttpClientModule {}
