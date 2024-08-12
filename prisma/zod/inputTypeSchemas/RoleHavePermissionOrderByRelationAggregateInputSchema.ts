import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RoleHavePermissionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.RoleHavePermissionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RoleHavePermissionOrderByRelationAggregateInputSchema;
