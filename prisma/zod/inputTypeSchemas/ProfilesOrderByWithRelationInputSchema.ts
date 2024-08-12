import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { UsersOrderByWithRelationInputSchema } from './UsersOrderByWithRelationInputSchema';

export const ProfilesOrderByWithRelationInputSchema: z.ZodType<Prisma.ProfilesOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  bio: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UsersOrderByWithRelationInputSchema).optional()
}).strict();

export default ProfilesOrderByWithRelationInputSchema;
