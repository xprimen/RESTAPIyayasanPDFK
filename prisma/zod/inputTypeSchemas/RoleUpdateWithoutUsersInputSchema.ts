import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { RoleHavePermissionUpdateManyWithoutRoleNestedInputSchema } from './RoleHavePermissionUpdateManyWithoutRoleNestedInputSchema';

export const RoleUpdateWithoutUsersInputSchema: z.ZodType<Prisma.RoleUpdateWithoutUsersInput> = z.object({
  rolekey: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rolename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  permissions: z.lazy(() => RoleHavePermissionUpdateManyWithoutRoleNestedInputSchema).optional()
}).strict();

export default RoleUpdateWithoutUsersInputSchema;
