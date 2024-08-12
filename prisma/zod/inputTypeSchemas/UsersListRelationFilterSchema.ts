import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UsersWhereInputSchema } from './UsersWhereInputSchema';

export const UsersListRelationFilterSchema: z.ZodType<Prisma.UsersListRelationFilter> = z.object({
  every: z.lazy(() => UsersWhereInputSchema).optional(),
  some: z.lazy(() => UsersWhereInputSchema).optional(),
  none: z.lazy(() => UsersWhereInputSchema).optional()
}).strict();

export default UsersListRelationFilterSchema;
