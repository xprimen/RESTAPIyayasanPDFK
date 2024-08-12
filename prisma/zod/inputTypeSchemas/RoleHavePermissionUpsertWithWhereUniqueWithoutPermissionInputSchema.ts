import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleHavePermissionWhereUniqueInputSchema } from './RoleHavePermissionWhereUniqueInputSchema';
import { RoleHavePermissionUpdateWithoutPermissionInputSchema } from './RoleHavePermissionUpdateWithoutPermissionInputSchema';
import { RoleHavePermissionUncheckedUpdateWithoutPermissionInputSchema } from './RoleHavePermissionUncheckedUpdateWithoutPermissionInputSchema';
import { RoleHavePermissionCreateWithoutPermissionInputSchema } from './RoleHavePermissionCreateWithoutPermissionInputSchema';
import { RoleHavePermissionUncheckedCreateWithoutPermissionInputSchema } from './RoleHavePermissionUncheckedCreateWithoutPermissionInputSchema';

export const RoleHavePermissionUpsertWithWhereUniqueWithoutPermissionInputSchema: z.ZodType<Prisma.RoleHavePermissionUpsertWithWhereUniqueWithoutPermissionInput> = z.object({
  where: z.lazy(() => RoleHavePermissionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RoleHavePermissionUpdateWithoutPermissionInputSchema),z.lazy(() => RoleHavePermissionUncheckedUpdateWithoutPermissionInputSchema) ]),
  create: z.union([ z.lazy(() => RoleHavePermissionCreateWithoutPermissionInputSchema),z.lazy(() => RoleHavePermissionUncheckedCreateWithoutPermissionInputSchema) ]),
}).strict();

export default RoleHavePermissionUpsertWithWhereUniqueWithoutPermissionInputSchema;
