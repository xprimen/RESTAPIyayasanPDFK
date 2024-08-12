import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UsersWhereInputSchema } from './UsersWhereInputSchema';

export const UsersNullableRelationFilterSchema: z.ZodType<Prisma.UsersNullableRelationFilter> = z.object({
  is: z.lazy(() => UsersWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => UsersWhereInputSchema).optional().nullable()
}).strict();

export default UsersNullableRelationFilterSchema;
