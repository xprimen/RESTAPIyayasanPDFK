import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SessionCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateWithoutUserInput> = z.object({
  sessionToken: z.string(),
  refreshToken: z.string(),
  device: z.string(),
  expires: z.coerce.date(),
  logout: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default SessionCreateWithoutUserInputSchema;
