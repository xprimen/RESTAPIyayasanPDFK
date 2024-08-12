import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UsersArgsSchema } from "../outputTypeSchemas/UsersArgsSchema"

export const SessionSelectSchema: z.ZodType<Prisma.SessionSelect> = z.object({
  id: z.boolean().optional(),
  sessionToken: z.boolean().optional(),
  refreshToken: z.boolean().optional(),
  device: z.boolean().optional(),
  userId: z.boolean().optional(),
  expires: z.boolean().optional(),
  logout: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UsersArgsSchema)]).optional(),
}).strict()

export default SessionSelectSchema;
