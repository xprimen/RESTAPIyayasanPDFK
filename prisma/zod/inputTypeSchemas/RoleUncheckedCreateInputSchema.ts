import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleHavePermissionUncheckedCreateNestedManyWithoutRoleInputSchema } from './RoleHavePermissionUncheckedCreateNestedManyWithoutRoleInputSchema';
import { UsersUncheckedCreateNestedManyWithoutRoleInputSchema } from './UsersUncheckedCreateNestedManyWithoutRoleInputSchema';

export const RoleUncheckedCreateInputSchema: z.ZodType<Prisma.RoleUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  rolekey: z.string(),
  rolename: z.string(),
  permissions: z.lazy(() => RoleHavePermissionUncheckedCreateNestedManyWithoutRoleInputSchema).optional(),
  users: z.lazy(() => UsersUncheckedCreateNestedManyWithoutRoleInputSchema).optional()
}).strict();

export default RoleUncheckedCreateInputSchema;
