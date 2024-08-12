import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { RoleHavePermissionUncheckedUpdateManyWithoutRoleNestedInputSchema } from './RoleHavePermissionUncheckedUpdateManyWithoutRoleNestedInputSchema';
import { UsersUncheckedUpdateManyWithoutRoleNestedInputSchema } from './UsersUncheckedUpdateManyWithoutRoleNestedInputSchema';

export const RoleUncheckedUpdateInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rolekey: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rolename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  permissions: z.lazy(() => RoleHavePermissionUncheckedUpdateManyWithoutRoleNestedInputSchema).optional(),
  users: z.lazy(() => UsersUncheckedUpdateManyWithoutRoleNestedInputSchema).optional()
}).strict();

export default RoleUncheckedUpdateInputSchema;
