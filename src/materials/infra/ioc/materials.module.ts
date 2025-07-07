import { Module } from '@nestjs/common';

import { useCaseProviders } from './providers/materials-repositories.providers';

import { MaterialsController } from '~materials/presentation/controllers/materials.controller';

const providerModules = [...useCaseProviders];

@Module({
  imports: [],
  controllers: [MaterialsController],
  providers: providerModules,
  exports: providerModules,
})
export class MaterialsModule {}
