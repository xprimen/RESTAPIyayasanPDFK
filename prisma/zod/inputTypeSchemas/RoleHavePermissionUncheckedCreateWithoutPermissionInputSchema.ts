import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RoleHavePermissionUncheckedCreateWithoutPermissionInputSchema: z.ZodType<Prisma.RoleHavePermissionUncheckedCreateWithoutPermissionInput> = z.object({
  roleId: z.number().int()
}).strict();

export default RoleHavePermissionUncheckedCreateWithoutPermissionInputSchema;
