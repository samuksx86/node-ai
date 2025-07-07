export interface CreateMaterialContract {
  execute(input: CreateMaterialInput): Promise<CreateMaterialOutput[]>;
}

export type CreateMaterialInput = {
  buffer: Buffer;
  originalname: string;
  mimetype: string;
};

export type CreateMaterialOutput = {
  file: string;
  chunk: number;
  text: string;
  embedding: number[];
};
