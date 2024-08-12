import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';

export const RoleHavePermissionScalarWhereInputSchema: z.ZodType<Prisma.RoleHavePermissionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RoleHavePermissionScalarWhereInputSchema),z.lazy(() => RoleHavePermissionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoleHavePermissionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoleHavePermissionScalarWhereInputSchema),z.lazy(() => RoleHavePermissionScalarWhereInputSchema).array() ]).optional(),
  roleId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  permissionId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default RoleHavePermissionScalarWhereInputSchema;
