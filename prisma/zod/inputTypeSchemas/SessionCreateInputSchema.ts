import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UsersCreateNestedOneWithoutSessionsInputSchema } from './UsersCreateNestedOneWithoutSessionsInputSchema';

export const SessionCreateInputSchema: z.ZodType<Prisma.SessionCreateInput> = z.object({
  sessionToken: z.string(),
  refreshToken: z.string(),
  device: z.string(),
  expires: z.coerce.date(),
  logout: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UsersCreateNestedOneWithoutSessionsInputSchema)
}).strict();

export default SessionCreateInputSchema;
