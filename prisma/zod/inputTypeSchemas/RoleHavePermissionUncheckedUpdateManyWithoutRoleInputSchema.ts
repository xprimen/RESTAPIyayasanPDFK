import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const RoleHavePermissionUncheckedUpdateManyWithoutRoleInputSchema: z.ZodType<Prisma.RoleHavePermissionUncheckedUpdateManyWithoutRoleInput> = z.object({
  permissionId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default RoleHavePermissionUncheckedUpdateManyWithoutRoleInputSchema;
