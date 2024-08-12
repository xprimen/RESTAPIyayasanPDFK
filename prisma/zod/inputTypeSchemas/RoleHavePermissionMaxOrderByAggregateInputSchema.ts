import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RoleHavePermissionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.RoleHavePermissionMaxOrderByAggregateInput> = z.object({
  roleId: z.lazy(() => SortOrderSchema).optional(),
  permissionId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RoleHavePermissionMaxOrderByAggregateInputSchema;
