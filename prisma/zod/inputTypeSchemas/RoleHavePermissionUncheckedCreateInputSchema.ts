import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RoleHavePermissionUncheckedCreateInputSchema: z.ZodType<Prisma.RoleHavePermissionUncheckedCreateInput> = z.object({
  roleId: z.number().int(),
  permissionId: z.number().int()
}).strict();

export default RoleHavePermissionUncheckedCreateInputSchema;
