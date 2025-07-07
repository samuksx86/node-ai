import { Express } from 'express';

export interface CreateMaterialContract {
  execute(file: CreateMaterialInput): Promise<CreateMaterialOutput[]>;
}

export type CreateMaterialInput = Express.Multer.File;

export type CreateMaterialOutput = {
  file: string;
  chunk: number;
  text: string;
  embedding: number[];
};
