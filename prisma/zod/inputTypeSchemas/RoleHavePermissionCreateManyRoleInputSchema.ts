import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RoleHavePermissionCreateManyRoleInputSchema: z.ZodType<Prisma.RoleHavePermissionCreateManyRoleInput> = z.object({
  permissionId: z.number().int()
}).strict();

export default RoleHavePermissionCreateManyRoleInputSchema;
