import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RoleHavePermissionCountOrderByAggregateInputSchema: z.ZodType<Prisma.RoleHavePermissionCountOrderByAggregateInput> = z.object({
  roleId: z.lazy(() => SortOrderSchema).optional(),
  permissionId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RoleHavePermissionCountOrderByAggregateInputSchema;
