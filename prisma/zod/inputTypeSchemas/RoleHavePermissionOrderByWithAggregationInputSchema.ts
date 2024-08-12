import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { RoleHavePermissionCountOrderByAggregateInputSchema } from './RoleHavePermissionCountOrderByAggregateInputSchema';
import { RoleHavePermissionAvgOrderByAggregateInputSchema } from './RoleHavePermissionAvgOrderByAggregateInputSchema';
import { RoleHavePermissionMaxOrderByAggregateInputSchema } from './RoleHavePermissionMaxOrderByAggregateInputSchema';
import { RoleHavePermissionMinOrderByAggregateInputSchema } from './RoleHavePermissionMinOrderByAggregateInputSchema';
import { RoleHavePermissionSumOrderByAggregateInputSchema } from './RoleHavePermissionSumOrderByAggregateInputSchema';

export const RoleHavePermissionOrderByWithAggregationInputSchema: z.ZodType<Prisma.RoleHavePermissionOrderByWithAggregationInput> = z.object({
  roleId: z.lazy(() => SortOrderSchema).optional(),
  permissionId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => RoleHavePermissionCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => RoleHavePermissionAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RoleHavePermissionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RoleHavePermissionMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => RoleHavePermissionSumOrderByAggregateInputSchema).optional()
}).strict();

export default RoleHavePermissionOrderByWithAggregationInputSchema;
