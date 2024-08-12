import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { RoleHavePermissionListRelationFilterSchema } from './RoleHavePermissionListRelationFilterSchema';
import { UsersListRelationFilterSchema } from './UsersListRelationFilterSchema';

export const RoleWhereInputSchema: z.ZodType<Prisma.RoleWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RoleWhereInputSchema),z.lazy(() => RoleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoleWhereInputSchema),z.lazy(() => RoleWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  rolekey: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rolename: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  permissions: z.lazy(() => RoleHavePermissionListRelationFilterSchema).optional(),
  users: z.lazy(() => UsersListRelationFilterSchema).optional()
}).strict();

export default RoleWhereInputSchema;
