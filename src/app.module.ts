import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';

import { SharedModule } from '~_shared/infra/ioc/shared.module';
import { AppController } from '~app.controller';
import { ChatModule } from '~chat/infra/ioc/chat.module';
import { MaterialsModule } from '~materials/infra/ioc/materials.module';

const applicationConfig = [
  ThrottlerModule.forRoot({
    throttlers: [
      {
        ttl: 60000,
        limit: 10,
      },
    ],
  }),
];

const applicationModules = [SharedModule, ChatModule, MaterialsModule];

@Module({
  imports: [...applicationConfig, ...applicationModules],
  controllers: [AppController],
})
export class AppModule {}
