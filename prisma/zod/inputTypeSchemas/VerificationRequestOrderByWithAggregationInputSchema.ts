import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { VerificationRequestCountOrderByAggregateInputSchema } from './VerificationRequestCountOrderByAggregateInputSchema';
import { VerificationRequestAvgOrderByAggregateInputSchema } from './VerificationRequestAvgOrderByAggregateInputSchema';
import { VerificationRequestMaxOrderByAggregateInputSchema } from './VerificationRequestMaxOrderByAggregateInputSchema';
import { VerificationRequestMinOrderByAggregateInputSchema } from './VerificationRequestMinOrderByAggregateInputSchema';
import { VerificationRequestSumOrderByAggregateInputSchema } from './VerificationRequestSumOrderByAggregateInputSchema';

export const VerificationRequestOrderByWithAggregationInputSchema: z.ZodType<Prisma.VerificationRequestOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => VerificationRequestCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => VerificationRequestAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => VerificationRequestMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => VerificationRequestMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => VerificationRequestSumOrderByAggregateInputSchema).optional()
}).strict();

export default VerificationRequestOrderByWithAggregationInputSchema;
