import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PermissionWhereInputSchema } from './PermissionWhereInputSchema';

export const PermissionRelationFilterSchema: z.ZodType<Prisma.PermissionRelationFilter> = z.object({
  is: z.lazy(() => PermissionWhereInputSchema).optional(),
  isNot: z.lazy(() => PermissionWhereInputSchema).optional()
}).strict();

export default PermissionRelationFilterSchema;
