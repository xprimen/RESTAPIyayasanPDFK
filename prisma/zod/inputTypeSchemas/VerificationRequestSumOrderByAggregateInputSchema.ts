import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const VerificationRequestSumOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationRequestSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default VerificationRequestSumOrderByAggregateInputSchema;
