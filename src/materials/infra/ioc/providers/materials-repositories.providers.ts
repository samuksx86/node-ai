import { CreateMaterialFactory } from '~materials/infra/ioc/factories/materials/create-material.factory';

export const useCaseProviders = [CreateMaterialFactory.generate()];
