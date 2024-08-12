import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const RoleHavePermissionUncheckedUpdateWithoutRoleInputSchema: z.ZodType<Prisma.RoleHavePermissionUncheckedUpdateWithoutRoleInput> = z.object({
  permissionId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default RoleHavePermissionUncheckedUpdateWithoutRoleInputSchema;
