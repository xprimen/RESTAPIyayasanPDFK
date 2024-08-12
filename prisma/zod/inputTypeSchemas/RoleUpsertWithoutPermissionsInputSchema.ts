import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleUpdateWithoutPermissionsInputSchema } from './RoleUpdateWithoutPermissionsInputSchema';
import { RoleUncheckedUpdateWithoutPermissionsInputSchema } from './RoleUncheckedUpdateWithoutPermissionsInputSchema';
import { RoleCreateWithoutPermissionsInputSchema } from './RoleCreateWithoutPermissionsInputSchema';
import { RoleUncheckedCreateWithoutPermissionsInputSchema } from './RoleUncheckedCreateWithoutPermissionsInputSchema';
import { RoleWhereInputSchema } from './RoleWhereInputSchema';

export const RoleUpsertWithoutPermissionsInputSchema: z.ZodType<Prisma.RoleUpsertWithoutPermissionsInput> = z.object({
  update: z.union([ z.lazy(() => RoleUpdateWithoutPermissionsInputSchema),z.lazy(() => RoleUncheckedUpdateWithoutPermissionsInputSchema) ]),
  create: z.union([ z.lazy(() => RoleCreateWithoutPermissionsInputSchema),z.lazy(() => RoleUncheckedCreateWithoutPermissionsInputSchema) ]),
  where: z.lazy(() => RoleWhereInputSchema).optional()
}).strict();

export default RoleUpsertWithoutPermissionsInputSchema;
