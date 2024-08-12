import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProfilesWhereInputSchema } from './ProfilesWhereInputSchema';

export const ProfilesNullableRelationFilterSchema: z.ZodType<Prisma.ProfilesNullableRelationFilter> = z.object({
  is: z.lazy(() => ProfilesWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ProfilesWhereInputSchema).optional().nullable()
}).strict();

export default ProfilesNullableRelationFilterSchema;
