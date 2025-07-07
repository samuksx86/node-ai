export interface CreateMaterialContract {
  execute(file: CreateMaterialInput): Promise<CreateMaterialOutput[]>;
}

export type CreateMaterialInput = {
  originalname: string;
  buffer: Buffer;
};

export type CreateMaterialOutput = {
  file: string;
  chunk: number;
  text: string;
  embedding: number[];
};
