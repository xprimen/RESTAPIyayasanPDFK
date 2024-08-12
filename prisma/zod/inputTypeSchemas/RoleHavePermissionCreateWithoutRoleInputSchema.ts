import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PermissionCreateNestedOneWithoutRolesInputSchema } from './PermissionCreateNestedOneWithoutRolesInputSchema';

export const RoleHavePermissionCreateWithoutRoleInputSchema: z.ZodType<Prisma.RoleHavePermissionCreateWithoutRoleInput> = z.object({
  permission: z.lazy(() => PermissionCreateNestedOneWithoutRolesInputSchema)
}).strict();

export default RoleHavePermissionCreateWithoutRoleInputSchema;
