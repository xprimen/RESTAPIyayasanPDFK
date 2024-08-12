import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleCreateNestedOneWithoutPermissionsInputSchema } from './RoleCreateNestedOneWithoutPermissionsInputSchema';
import { PermissionCreateNestedOneWithoutRolesInputSchema } from './PermissionCreateNestedOneWithoutRolesInputSchema';

export const RoleHavePermissionCreateInputSchema: z.ZodType<Prisma.RoleHavePermissionCreateInput> = z.object({
  role: z.lazy(() => RoleCreateNestedOneWithoutPermissionsInputSchema),
  permission: z.lazy(() => PermissionCreateNestedOneWithoutRolesInputSchema)
}).strict();

export default RoleHavePermissionCreateInputSchema;
