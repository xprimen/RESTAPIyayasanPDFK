import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProfilesSumOrderByAggregateInputSchema: z.ZodType<Prisma.ProfilesSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ProfilesSumOrderByAggregateInputSchema;
