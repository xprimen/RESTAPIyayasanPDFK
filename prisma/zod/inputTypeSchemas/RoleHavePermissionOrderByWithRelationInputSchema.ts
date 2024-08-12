import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { RoleOrderByWithRelationInputSchema } from './RoleOrderByWithRelationInputSchema';
import { PermissionOrderByWithRelationInputSchema } from './PermissionOrderByWithRelationInputSchema';

export const RoleHavePermissionOrderByWithRelationInputSchema: z.ZodType<Prisma.RoleHavePermissionOrderByWithRelationInput> = z.object({
  roleId: z.lazy(() => SortOrderSchema).optional(),
  permissionId: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => RoleOrderByWithRelationInputSchema).optional(),
  permission: z.lazy(() => PermissionOrderByWithRelationInputSchema).optional()
}).strict();

export default RoleHavePermissionOrderByWithRelationInputSchema;
