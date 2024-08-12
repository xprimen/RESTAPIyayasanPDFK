import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const RoleHavePermissionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.RoleHavePermissionUncheckedUpdateManyInput> = z.object({
  roleId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  permissionId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default RoleHavePermissionUncheckedUpdateManyInputSchema;
