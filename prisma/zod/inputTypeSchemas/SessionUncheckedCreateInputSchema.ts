import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SessionUncheckedCreateInputSchema: z.ZodType<Prisma.SessionUncheckedCreateInput> = z.object({
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

export default SessionUncheckedCreateInputSchema;
