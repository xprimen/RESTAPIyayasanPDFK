import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { RoleHavePermissionOrderByRelationAggregateInputSchema } from './RoleHavePermissionOrderByRelationAggregateInputSchema';
import { UsersOrderByRelationAggregateInputSchema } from './UsersOrderByRelationAggregateInputSchema';

export const RoleOrderByWithRelationInputSchema: z.ZodType<Prisma.RoleOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rolekey: z.lazy(() => SortOrderSchema).optional(),
  rolename: z.lazy(() => SortOrderSchema).optional(),
  permissions: z.lazy(() => RoleHavePermissionOrderByRelationAggregateInputSchema).optional(),
  users: z.lazy(() => UsersOrderByRelationAggregateInputSchema).optional()
}).strict();

export default RoleOrderByWithRelationInputSchema;
