import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleHavePermissionUncheckedCreateNestedManyWithoutRoleInputSchema } from './RoleHavePermissionUncheckedCreateNestedManyWithoutRoleInputSchema';

export const RoleUncheckedCreateWithoutUsersInputSchema: z.ZodType<Prisma.RoleUncheckedCreateWithoutUsersInput> = z.object({
  id: z.number().int().optional(),
  rolekey: z.string(),
  rolename: z.string(),
  permissions: z.lazy(() => RoleHavePermissionUncheckedCreateNestedManyWithoutRoleInputSchema).optional()
}).strict();

export default RoleUncheckedCreateWithoutUsersInputSchema;
