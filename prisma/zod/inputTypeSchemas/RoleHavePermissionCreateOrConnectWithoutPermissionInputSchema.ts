import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleHavePermissionWhereUniqueInputSchema } from './RoleHavePermissionWhereUniqueInputSchema';
import { RoleHavePermissionCreateWithoutPermissionInputSchema } from './RoleHavePermissionCreateWithoutPermissionInputSchema';
import { RoleHavePermissionUncheckedCreateWithoutPermissionInputSchema } from './RoleHavePermissionUncheckedCreateWithoutPermissionInputSchema';

export const RoleHavePermissionCreateOrConnectWithoutPermissionInputSchema: z.ZodType<Prisma.RoleHavePermissionCreateOrConnectWithoutPermissionInput> = z.object({
  where: z.lazy(() => RoleHavePermissionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoleHavePermissionCreateWithoutPermissionInputSchema),z.lazy(() => RoleHavePermissionUncheckedCreateWithoutPermissionInputSchema) ]),
}).strict();

export default RoleHavePermissionCreateOrConnectWithoutPermissionInputSchema;
