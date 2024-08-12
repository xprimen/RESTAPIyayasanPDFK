import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleHavePermissionCreateNestedManyWithoutRoleInputSchema } from './RoleHavePermissionCreateNestedManyWithoutRoleInputSchema';

export const RoleCreateWithoutUsersInputSchema: z.ZodType<Prisma.RoleCreateWithoutUsersInput> = z.object({
  rolekey: z.string(),
  rolename: z.string(),
  permissions: z.lazy(() => RoleHavePermissionCreateNestedManyWithoutRoleInputSchema).optional()
}).strict();

export default RoleCreateWithoutUsersInputSchema;
