import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RoleHavePermissionCreateManyPermissionInputSchema: z.ZodType<Prisma.RoleHavePermissionCreateManyPermissionInput> = z.object({
  roleId: z.number().int()
}).strict();

export default RoleHavePermissionCreateManyPermissionInputSchema;
