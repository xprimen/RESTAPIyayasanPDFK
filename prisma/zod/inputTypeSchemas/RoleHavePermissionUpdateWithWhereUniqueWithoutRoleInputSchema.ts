import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleHavePermissionWhereUniqueInputSchema } from './RoleHavePermissionWhereUniqueInputSchema';
import { RoleHavePermissionUpdateWithoutRoleInputSchema } from './RoleHavePermissionUpdateWithoutRoleInputSchema';
import { RoleHavePermissionUncheckedUpdateWithoutRoleInputSchema } from './RoleHavePermissionUncheckedUpdateWithoutRoleInputSchema';

export const RoleHavePermissionUpdateWithWhereUniqueWithoutRoleInputSchema: z.ZodType<Prisma.RoleHavePermissionUpdateWithWhereUniqueWithoutRoleInput> = z.object({
  where: z.lazy(() => RoleHavePermissionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RoleHavePermissionUpdateWithoutRoleInputSchema),z.lazy(() => RoleHavePermissionUncheckedUpdateWithoutRoleInputSchema) ]),
}).strict();

export default RoleHavePermissionUpdateWithWhereUniqueWithoutRoleInputSchema;
