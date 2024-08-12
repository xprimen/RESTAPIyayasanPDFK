import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleHavePermissionCreateNestedManyWithoutRoleInputSchema } from './RoleHavePermissionCreateNestedManyWithoutRoleInputSchema';
import { UsersCreateNestedManyWithoutRoleInputSchema } from './UsersCreateNestedManyWithoutRoleInputSchema';

export const RoleCreateInputSchema: z.ZodType<Prisma.RoleCreateInput> = z.object({
  rolekey: z.string(),
  rolename: z.string(),
  permissions: z.lazy(() => RoleHavePermissionCreateNestedManyWithoutRoleInputSchema).optional(),
  users: z.lazy(() => UsersCreateNestedManyWithoutRoleInputSchema).optional()
}).strict();

export default RoleCreateInputSchema;
