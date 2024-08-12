import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RoleHavePermissionPermissionIdRoleIdCompoundUniqueInputSchema: z.ZodType<Prisma.RoleHavePermissionPermissionIdRoleIdCompoundUniqueInput> = z.object({
  permissionId: z.number(),
  roleId: z.number()
}).strict();

export default RoleHavePermissionPermissionIdRoleIdCompoundUniqueInputSchema;
