import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RoleCountOrderByAggregateInputSchema: z.ZodType<Prisma.RoleCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rolekey: z.lazy(() => SortOrderSchema).optional(),
  rolename: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RoleCountOrderByAggregateInputSchema;
