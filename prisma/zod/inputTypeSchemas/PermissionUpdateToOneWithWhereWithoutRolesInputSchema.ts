import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PermissionWhereInputSchema } from './PermissionWhereInputSchema';
import { PermissionUpdateWithoutRolesInputSchema } from './PermissionUpdateWithoutRolesInputSchema';
import { PermissionUncheckedUpdateWithoutRolesInputSchema } from './PermissionUncheckedUpdateWithoutRolesInputSchema';

export const PermissionUpdateToOneWithWhereWithoutRolesInputSchema: z.ZodType<Prisma.PermissionUpdateToOneWithWhereWithoutRolesInput> = z.object({
  where: z.lazy(() => PermissionWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PermissionUpdateWithoutRolesInputSchema),z.lazy(() => PermissionUncheckedUpdateWithoutRolesInputSchema) ]),
}).strict();

export default PermissionUpdateToOneWithWhereWithoutRolesInputSchema;
