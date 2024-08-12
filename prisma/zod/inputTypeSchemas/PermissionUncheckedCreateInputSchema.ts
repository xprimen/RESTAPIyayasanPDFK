import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleHavePermissionUncheckedCreateNestedManyWithoutPermissionInputSchema } from './RoleHavePermissionUncheckedCreateNestedManyWithoutPermissionInputSchema';

export const PermissionUncheckedCreateInputSchema: z.ZodType<Prisma.PermissionUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  description: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  roles: z.lazy(() => RoleHavePermissionUncheckedCreateNestedManyWithoutPermissionInputSchema).optional()
}).strict();

export default PermissionUncheckedCreateInputSchema;
