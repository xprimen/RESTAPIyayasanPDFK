import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleCreateNestedOneWithoutPermissionsInputSchema } from './RoleCreateNestedOneWithoutPermissionsInputSchema';

export const RoleHavePermissionCreateWithoutPermissionInputSchema: z.ZodType<Prisma.RoleHavePermissionCreateWithoutPermissionInput> = z.object({
  role: z.lazy(() => RoleCreateNestedOneWithoutPermissionsInputSchema)
}).strict();

export default RoleHavePermissionCreateWithoutPermissionInputSchema;
