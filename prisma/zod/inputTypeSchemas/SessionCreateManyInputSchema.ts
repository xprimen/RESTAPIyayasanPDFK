import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SessionCreateManyInputSchema: z.ZodType<Prisma.SessionCreateManyInput> = z.object({
  id: z.number().int().optional(),
  sessionToken: z.string(),
  refreshToken: z.string(),
  device: z.string(),
  userId: z.string(),
  expires: z.coerce.date(),
  logout: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default SessionCreateManyInputSchema;
