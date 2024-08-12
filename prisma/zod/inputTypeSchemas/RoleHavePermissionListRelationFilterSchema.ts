import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleHavePermissionWhereInputSchema } from './RoleHavePermissionWhereInputSchema';

export const RoleHavePermissionListRelationFilterSchema: z.ZodType<Prisma.RoleHavePermissionListRelationFilter> = z.object({
  every: z.lazy(() => RoleHavePermissionWhereInputSchema).optional(),
  some: z.lazy(() => RoleHavePermissionWhereInputSchema).optional(),
  none: z.lazy(() => RoleHavePermissionWhereInputSchema).optional()
}).strict();

export default RoleHavePermissionListRelationFilterSchema;
