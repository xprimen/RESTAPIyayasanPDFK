import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const ProfilesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProfilesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProfilesScalarWhereWithAggregatesInputSchema),z.lazy(() => ProfilesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProfilesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProfilesScalarWhereWithAggregatesInputSchema),z.lazy(() => ProfilesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  bio: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default ProfilesScalarWhereWithAggregatesInputSchema;
