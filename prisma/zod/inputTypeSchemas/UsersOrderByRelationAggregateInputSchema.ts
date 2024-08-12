import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const UsersOrderByRelationAggregateInputSchema: z.ZodType<Prisma.UsersOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default UsersOrderByRelationAggregateInputSchema;
