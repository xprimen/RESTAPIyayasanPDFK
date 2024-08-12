import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RoleHavePermissionSumOrderByAggregateInputSchema: z.ZodType<Prisma.RoleHavePermissionSumOrderByAggregateInput> = z.object({
  roleId: z.lazy(() => SortOrderSchema).optional(),
  permissionId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RoleHavePermissionSumOrderByAggregateInputSchema;
