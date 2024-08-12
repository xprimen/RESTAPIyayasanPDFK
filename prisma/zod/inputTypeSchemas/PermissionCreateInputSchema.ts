import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleHavePermissionCreateNestedManyWithoutPermissionInputSchema } from './RoleHavePermissionCreateNestedManyWithoutPermissionInputSchema';

export const PermissionCreateInputSchema: z.ZodType<Prisma.PermissionCreateInput> = z.object({
  name: z.string(),
  description: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  roles: z.lazy(() => RoleHavePermissionCreateNestedManyWithoutPermissionInputSchema).optional()
}).strict();

export default PermissionCreateInputSchema;
