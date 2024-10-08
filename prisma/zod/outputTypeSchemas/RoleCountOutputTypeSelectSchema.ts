import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const RoleCountOutputTypeSelectSchema: z.ZodType<Prisma.RoleCountOutputTypeSelect> = z.object({
  permissions: z.boolean().optional(),
  users: z.boolean().optional(),
}).strict();

export default RoleCountOutputTypeSelectSchema;
