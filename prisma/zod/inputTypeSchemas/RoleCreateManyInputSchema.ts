import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RoleCreateManyInputSchema: z.ZodType<Prisma.RoleCreateManyInput> = z.object({
  id: z.number().int().optional(),
  rolekey: z.string(),
  rolename: z.string()
}).strict();

export default RoleCreateManyInputSchema;
