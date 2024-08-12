import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleWhereInputSchema } from './RoleWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { RoleHavePermissionListRelationFilterSchema } from './RoleHavePermissionListRelationFilterSchema';
import { UsersListRelationFilterSchema } from './UsersListRelationFilterSchema';

export const RoleWhereUniqueInputSchema: z.ZodType<Prisma.RoleWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    rolekey: z.string()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    rolekey: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  rolekey: z.string().optional(),
  AND: z.union([ z.lazy(() => RoleWhereInputSchema),z.lazy(() => RoleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoleWhereInputSchema),z.lazy(() => RoleWhereInputSchema).array() ]).optional(),
  rolename: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  permissions: z.lazy(() => RoleHavePermissionListRelationFilterSchema).optional(),
  users: z.lazy(() => UsersListRelationFilterSchema).optional()
}).strict());

export default RoleWhereUniqueInputSchema;
