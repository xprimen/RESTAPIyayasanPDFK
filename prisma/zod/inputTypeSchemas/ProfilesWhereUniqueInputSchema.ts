import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProfilesWhereInputSchema } from './ProfilesWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { UsersRelationFilterSchema } from './UsersRelationFilterSchema';
import { UsersWhereInputSchema } from './UsersWhereInputSchema';

export const ProfilesWhereUniqueInputSchema: z.ZodType<Prisma.ProfilesWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    userId: z.string()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    userId: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  userId: z.string().optional(),
  AND: z.union([ z.lazy(() => ProfilesWhereInputSchema),z.lazy(() => ProfilesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProfilesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProfilesWhereInputSchema),z.lazy(() => ProfilesWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  bio: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UsersRelationFilterSchema),z.lazy(() => UsersWhereInputSchema) ]).optional(),
}).strict());

export default ProfilesWhereUniqueInputSchema;
