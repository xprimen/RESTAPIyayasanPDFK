import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const RoleHavePermissionUncheckedUpdateWithoutPermissionInputSchema: z.ZodType<Prisma.RoleHavePermissionUncheckedUpdateWithoutPermissionInput> = z.object({
  roleId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default RoleHavePermissionUncheckedUpdateWithoutPermissionInputSchema;
