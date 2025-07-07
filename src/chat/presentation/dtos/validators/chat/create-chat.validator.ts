import * as z from 'zod';

import { CreateChatRequestDTO } from '../../post/create-chat.dto';

export const createChatValidator = z.object({
  message: z.string().min(1, { message: 'Message is required' }),
}) satisfies z.ZodType<CreateChatRequestDTO>;
