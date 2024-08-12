import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ProfilesCountOrderByAggregateInputSchema } from './ProfilesCountOrderByAggregateInputSchema';
import { ProfilesAvgOrderByAggregateInputSchema } from './ProfilesAvgOrderByAggregateInputSchema';
import { ProfilesMaxOrderByAggregateInputSchema } from './ProfilesMaxOrderByAggregateInputSchema';
import { ProfilesMinOrderByAggregateInputSchema } from './ProfilesMinOrderByAggregateInputSchema';
import { ProfilesSumOrderByAggregateInputSchema } from './ProfilesSumOrderByAggregateInputSchema';

export const ProfilesOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProfilesOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  bio: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProfilesCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ProfilesAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProfilesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProfilesMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ProfilesSumOrderByAggregateInputSchema).optional()
}).strict();

export default ProfilesOrderByWithAggregationInputSchema;
