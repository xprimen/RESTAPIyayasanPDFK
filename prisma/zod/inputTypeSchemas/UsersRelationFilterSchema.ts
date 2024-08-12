import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UsersWhereInputSchema } from './UsersWhereInputSchema';

export const UsersRelationFilterSchema: z.ZodType<Prisma.UsersRelationFilter> = z.object({
  is: z.lazy(() => UsersWhereInputSchema).optional(),
  isNot: z.lazy(() => UsersWhereInputSchema).optional()
}).strict();

export default UsersRelationFilterSchema;
