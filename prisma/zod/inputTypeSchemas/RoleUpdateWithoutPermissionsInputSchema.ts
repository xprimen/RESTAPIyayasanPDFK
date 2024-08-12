import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { UsersUpdateManyWithoutRoleNestedInputSchema } from './UsersUpdateManyWithoutRoleNestedInputSchema';

export const RoleUpdateWithoutPermissionsInputSchema: z.ZodType<Prisma.RoleUpdateWithoutPermissionsInput> = z.object({
  rolekey: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rolename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  users: z.lazy(() => UsersUpdateManyWithoutRoleNestedInputSchema).optional()
}).strict();

export default RoleUpdateWithoutPermissionsInputSchema;
