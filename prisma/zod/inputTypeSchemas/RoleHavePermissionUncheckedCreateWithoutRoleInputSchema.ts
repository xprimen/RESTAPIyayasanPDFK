import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RoleHavePermissionUncheckedCreateWithoutRoleInputSchema: z.ZodType<Prisma.RoleHavePermissionUncheckedCreateWithoutRoleInput> = z.object({
  permissionId: z.number().int()
}).strict();

export default RoleHavePermissionUncheckedCreateWithoutRoleInputSchema;
