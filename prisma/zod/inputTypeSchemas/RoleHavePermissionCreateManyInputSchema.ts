import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RoleHavePermissionCreateManyInputSchema: z.ZodType<Prisma.RoleHavePermissionCreateManyInput> = z.object({
  roleId: z.number().int(),
  permissionId: z.number().int()
}).strict();

export default RoleHavePermissionCreateManyInputSchema;
