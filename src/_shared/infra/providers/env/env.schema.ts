import { z } from 'zod';

export const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),
  PORT: z.string().regex(/^\d+$/).transform(Number),
  CORS_URL: z.string().optional(),

  OPENAI_API_KEY: z.string(),
  PINECONE_API_KEY: z.string(),
});

export type EnvSchema = z.infer<typeof envSchema>;
