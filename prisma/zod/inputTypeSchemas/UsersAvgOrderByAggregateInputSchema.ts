import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const UsersAvgOrderByAggregateInputSchema: z.ZodType<Prisma.UsersAvgOrderByAggregateInput> = z.object({
  roleId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default UsersAvgOrderByAggregateInputSchema;
