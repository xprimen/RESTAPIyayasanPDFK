import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { UsersRelationFilterSchema } from './UsersRelationFilterSchema';
import { UsersWhereInputSchema } from './UsersWhereInputSchema';

export const ProfilesWhereInputSchema: z.ZodType<Prisma.ProfilesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProfilesWhereInputSchema),z.lazy(() => ProfilesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProfilesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProfilesWhereInputSchema),z.lazy(() => ProfilesWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  bio: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UsersRelationFilterSchema),z.lazy(() => UsersWhereInputSchema) ]).optional(),
}).strict();

export default ProfilesWhereInputSchema;
