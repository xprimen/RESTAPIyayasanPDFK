import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const UsersCountOutputTypeSelectSchema: z.ZodType<Prisma.UsersCountOutputTypeSelect> = z.object({
  accounts: z.boolean().optional(),
  sessions: z.boolean().optional(),
}).strict();

export default UsersCountOutputTypeSelectSchema;
