import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { RoleRelationFilterSchema } from './RoleRelationFilterSchema';
import { RoleWhereInputSchema } from './RoleWhereInputSchema';
import { PermissionRelationFilterSchema } from './PermissionRelationFilterSchema';
import { PermissionWhereInputSchema } from './PermissionWhereInputSchema';

export const RoleHavePermissionWhereInputSchema: z.ZodType<Prisma.RoleHavePermissionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RoleHavePermissionWhereInputSchema),z.lazy(() => RoleHavePermissionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoleHavePermissionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoleHavePermissionWhereInputSchema),z.lazy(() => RoleHavePermissionWhereInputSchema).array() ]).optional(),
  roleId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  permissionId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  role: z.union([ z.lazy(() => RoleRelationFilterSchema),z.lazy(() => RoleWhereInputSchema) ]).optional(),
  permission: z.union([ z.lazy(() => PermissionRelationFilterSchema),z.lazy(() => PermissionWhereInputSchema) ]).optional(),
}).strict();

export default RoleHavePermissionWhereInputSchema;
