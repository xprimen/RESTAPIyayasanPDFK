import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RoleHavePermissionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.RoleHavePermissionAvgOrderByAggregateInput> = z.object({
  roleId: z.lazy(() => SortOrderSchema).optional(),
  permissionId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RoleHavePermissionAvgOrderByAggregateInputSchema;
