import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UsersUncheckedCreateNestedManyWithoutRoleInputSchema } from './UsersUncheckedCreateNestedManyWithoutRoleInputSchema';

export const RoleUncheckedCreateWithoutPermissionsInputSchema: z.ZodType<Prisma.RoleUncheckedCreateWithoutPermissionsInput> = z.object({
  id: z.number().int().optional(),
  rolekey: z.string(),
  rolename: z.string(),
  users: z.lazy(() => UsersUncheckedCreateNestedManyWithoutRoleInputSchema).optional()
}).strict();

export default RoleUncheckedCreateWithoutPermissionsInputSchema;
