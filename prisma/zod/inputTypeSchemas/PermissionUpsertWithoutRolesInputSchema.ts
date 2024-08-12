import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PermissionUpdateWithoutRolesInputSchema } from './PermissionUpdateWithoutRolesInputSchema';
import { PermissionUncheckedUpdateWithoutRolesInputSchema } from './PermissionUncheckedUpdateWithoutRolesInputSchema';
import { PermissionCreateWithoutRolesInputSchema } from './PermissionCreateWithoutRolesInputSchema';
import { PermissionUncheckedCreateWithoutRolesInputSchema } from './PermissionUncheckedCreateWithoutRolesInputSchema';
import { PermissionWhereInputSchema } from './PermissionWhereInputSchema';

export const PermissionUpsertWithoutRolesInputSchema: z.ZodType<Prisma.PermissionUpsertWithoutRolesInput> = z.object({
  update: z.union([ z.lazy(() => PermissionUpdateWithoutRolesInputSchema),z.lazy(() => PermissionUncheckedUpdateWithoutRolesInputSchema) ]),
  create: z.union([ z.lazy(() => PermissionCreateWithoutRolesInputSchema),z.lazy(() => PermissionUncheckedCreateWithoutRolesInputSchema) ]),
  where: z.lazy(() => PermissionWhereInputSchema).optional()
}).strict();

export default PermissionUpsertWithoutRolesInputSchema;
