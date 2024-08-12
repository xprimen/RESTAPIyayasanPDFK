import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UsersCreateNestedManyWithoutRoleInputSchema } from './UsersCreateNestedManyWithoutRoleInputSchema';

export const RoleCreateWithoutPermissionsInputSchema: z.ZodType<Prisma.RoleCreateWithoutPermissionsInput> = z.object({
  rolekey: z.string(),
  rolename: z.string(),
  users: z.lazy(() => UsersCreateNestedManyWithoutRoleInputSchema).optional()
}).strict();

export default RoleCreateWithoutPermissionsInputSchema;
