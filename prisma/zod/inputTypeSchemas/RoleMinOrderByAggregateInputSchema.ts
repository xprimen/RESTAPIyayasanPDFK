import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RoleMinOrderByAggregateInputSchema: z.ZodType<Prisma.RoleMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rolekey: z.lazy(() => SortOrderSchema).optional(),
  rolename: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RoleMinOrderByAggregateInputSchema;
