import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleHavePermissionWhereUniqueInputSchema } from './RoleHavePermissionWhereUniqueInputSchema';
import { RoleHavePermissionUpdateWithoutPermissionInputSchema } from './RoleHavePermissionUpdateWithoutPermissionInputSchema';
import { RoleHavePermissionUncheckedUpdateWithoutPermissionInputSchema } from './RoleHavePermissionUncheckedUpdateWithoutPermissionInputSchema';

export const RoleHavePermissionUpdateWithWhereUniqueWithoutPermissionInputSchema: z.ZodType<Prisma.RoleHavePermissionUpdateWithWhereUniqueWithoutPermissionInput> = z.object({
  where: z.lazy(() => RoleHavePermissionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RoleHavePermissionUpdateWithoutPermissionInputSchema),z.lazy(() => RoleHavePermissionUncheckedUpdateWithoutPermissionInputSchema) ]),
}).strict();

export default RoleHavePermissionUpdateWithWhereUniqueWithoutPermissionInputSchema;
