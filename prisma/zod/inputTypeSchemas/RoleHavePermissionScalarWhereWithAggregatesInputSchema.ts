import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const RoleHavePermissionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RoleHavePermissionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => RoleHavePermissionScalarWhereWithAggregatesInputSchema),z.lazy(() => RoleHavePermissionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoleHavePermissionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoleHavePermissionScalarWhereWithAggregatesInputSchema),z.lazy(() => RoleHavePermissionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  roleId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  permissionId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default RoleHavePermissionScalarWhereWithAggregatesInputSchema;
