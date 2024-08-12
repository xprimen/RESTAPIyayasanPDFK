import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleHavePermissionWhereUniqueInputSchema } from './RoleHavePermissionWhereUniqueInputSchema';
import { RoleHavePermissionCreateWithoutRoleInputSchema } from './RoleHavePermissionCreateWithoutRoleInputSchema';
import { RoleHavePermissionUncheckedCreateWithoutRoleInputSchema } from './RoleHavePermissionUncheckedCreateWithoutRoleInputSchema';

export const RoleHavePermissionCreateOrConnectWithoutRoleInputSchema: z.ZodType<Prisma.RoleHavePermissionCreateOrConnectWithoutRoleInput> = z.object({
  where: z.lazy(() => RoleHavePermissionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoleHavePermissionCreateWithoutRoleInputSchema),z.lazy(() => RoleHavePermissionUncheckedCreateWithoutRoleInputSchema) ]),
}).strict();

export default RoleHavePermissionCreateOrConnectWithoutRoleInputSchema;
