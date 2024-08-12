import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleWhereInputSchema } from './RoleWhereInputSchema';
import { RoleUpdateWithoutPermissionsInputSchema } from './RoleUpdateWithoutPermissionsInputSchema';
import { RoleUncheckedUpdateWithoutPermissionsInputSchema } from './RoleUncheckedUpdateWithoutPermissionsInputSchema';

export const RoleUpdateToOneWithWhereWithoutPermissionsInputSchema: z.ZodType<Prisma.RoleUpdateToOneWithWhereWithoutPermissionsInput> = z.object({
  where: z.lazy(() => RoleWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RoleUpdateWithoutPermissionsInputSchema),z.lazy(() => RoleUncheckedUpdateWithoutPermissionsInputSchema) ]),
}).strict();

export default RoleUpdateToOneWithWhereWithoutPermissionsInputSchema;
