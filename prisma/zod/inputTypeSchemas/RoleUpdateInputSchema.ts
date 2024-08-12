import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { RoleHavePermissionUpdateManyWithoutRoleNestedInputSchema } from './RoleHavePermissionUpdateManyWithoutRoleNestedInputSchema';
import { UsersUpdateManyWithoutRoleNestedInputSchema } from './UsersUpdateManyWithoutRoleNestedInputSchema';

export const RoleUpdateInputSchema: z.ZodType<Prisma.RoleUpdateInput> = z.object({
  rolekey: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rolename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  permissions: z.lazy(() => RoleHavePermissionUpdateManyWithoutRoleNestedInputSchema).optional(),
  users: z.lazy(() => UsersUpdateManyWithoutRoleNestedInputSchema).optional()
}).strict();

export default RoleUpdateInputSchema;
