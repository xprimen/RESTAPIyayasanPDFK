import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleHavePermissionPermissionIdRoleIdCompoundUniqueInputSchema } from './RoleHavePermissionPermissionIdRoleIdCompoundUniqueInputSchema';
import { RoleHavePermissionWhereInputSchema } from './RoleHavePermissionWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { RoleRelationFilterSchema } from './RoleRelationFilterSchema';
import { RoleWhereInputSchema } from './RoleWhereInputSchema';
import { PermissionRelationFilterSchema } from './PermissionRelationFilterSchema';
import { PermissionWhereInputSchema } from './PermissionWhereInputSchema';

export const RoleHavePermissionWhereUniqueInputSchema: z.ZodType<Prisma.RoleHavePermissionWhereUniqueInput> = z.object({
  permissionId_roleId: z.lazy(() => RoleHavePermissionPermissionIdRoleIdCompoundUniqueInputSchema)
})
.and(z.object({
  permissionId_roleId: z.lazy(() => RoleHavePermissionPermissionIdRoleIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => RoleHavePermissionWhereInputSchema),z.lazy(() => RoleHavePermissionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoleHavePermissionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoleHavePermissionWhereInputSchema),z.lazy(() => RoleHavePermissionWhereInputSchema).array() ]).optional(),
  roleId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  permissionId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  role: z.union([ z.lazy(() => RoleRelationFilterSchema),z.lazy(() => RoleWhereInputSchema) ]).optional(),
  permission: z.union([ z.lazy(() => PermissionRelationFilterSchema),z.lazy(() => PermissionWhereInputSchema) ]).optional(),
}).strict());

export default RoleHavePermissionWhereUniqueInputSchema;
