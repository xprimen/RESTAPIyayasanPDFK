import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PermissionCountOrderByAggregateInputSchema } from './PermissionCountOrderByAggregateInputSchema';
import { PermissionAvgOrderByAggregateInputSchema } from './PermissionAvgOrderByAggregateInputSchema';
import { PermissionMaxOrderByAggregateInputSchema } from './PermissionMaxOrderByAggregateInputSchema';
import { PermissionMinOrderByAggregateInputSchema } from './PermissionMinOrderByAggregateInputSchema';
import { PermissionSumOrderByAggregateInputSchema } from './PermissionSumOrderByAggregateInputSchema';

export const PermissionOrderByWithAggregationInputSchema: z.ZodType<Prisma.PermissionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => PermissionCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PermissionAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PermissionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PermissionMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PermissionSumOrderByAggregateInputSchema).optional()
}).strict();

export default PermissionOrderByWithAggregationInputSchema;
