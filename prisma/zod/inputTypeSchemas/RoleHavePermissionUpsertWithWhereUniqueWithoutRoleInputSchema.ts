import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleHavePermissionWhereUniqueInputSchema } from './RoleHavePermissionWhereUniqueInputSchema';
import { RoleHavePermissionUpdateWithoutRoleInputSchema } from './RoleHavePermissionUpdateWithoutRoleInputSchema';
import { RoleHavePermissionUncheckedUpdateWithoutRoleInputSchema } from './RoleHavePermissionUncheckedUpdateWithoutRoleInputSchema';
import { RoleHavePermissionCreateWithoutRoleInputSchema } from './RoleHavePermissionCreateWithoutRoleInputSchema';
import { RoleHavePermissionUncheckedCreateWithoutRoleInputSchema } from './RoleHavePermissionUncheckedCreateWithoutRoleInputSchema';

export const RoleHavePermissionUpsertWithWhereUniqueWithoutRoleInputSchema: z.ZodType<Prisma.RoleHavePermissionUpsertWithWhereUniqueWithoutRoleInput> = z.object({
  where: z.lazy(() => RoleHavePermissionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RoleHavePermissionUpdateWithoutRoleInputSchema),z.lazy(() => RoleHavePermissionUncheckedUpdateWithoutRoleInputSchema) ]),
  create: z.union([ z.lazy(() => RoleHavePermissionCreateWithoutRoleInputSchema),z.lazy(() => RoleHavePermissionUncheckedCreateWithoutRoleInputSchema) ]),
}).strict();

export default RoleHavePermissionUpsertWithWhereUniqueWithoutRoleInputSchema;
