import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { RoleHavePermissionUncheckedUpdateManyWithoutRoleNestedInputSchema } from './RoleHavePermissionUncheckedUpdateManyWithoutRoleNestedInputSchema';

export const RoleUncheckedUpdateWithoutUsersInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateWithoutUsersInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rolekey: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rolename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  permissions: z.lazy(() => RoleHavePermissionUncheckedUpdateManyWithoutRoleNestedInputSchema).optional()
}).strict();

export default RoleUncheckedUpdateWithoutUsersInputSchema;
