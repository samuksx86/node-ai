import {
  Controller,
  Inject,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiResponse } from '@nestjs/swagger';

import { HttpCodeEnum } from '~_shared/constants/http-code.enum';
import { CreateMaterialContract } from '~materials/application/use-cases/create-material/create-material.contract';
import { MaterialsIocTypes } from '~materials/infra/ioc/materials-ioc-types';
import { CreateMaterialResponseDTO } from '~materials/presentation/dtos/materials/create-material.dto';

@Controller('materials')
export class MaterialsController {
  constructor(
    @Inject(MaterialsIocTypes.CREATE_MATERIAL)
    private readonly createMaterial: CreateMaterialContract,
  ) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @ApiResponse({
    status: HttpCodeEnum.CREATED,
    description: 'Material created successfully',
    type: CreateMaterialResponseDTO,
  })
  async create(@UploadedFile() file): Promise<CreateMaterialResponseDTO[]> {
    return this.createMaterial.execute(file);
  }
}
