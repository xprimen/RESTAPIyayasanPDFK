import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleHavePermissionScalarWhereInputSchema } from './RoleHavePermissionScalarWhereInputSchema';
import { RoleHavePermissionUpdateManyMutationInputSchema } from './RoleHavePermissionUpdateManyMutationInputSchema';
import { RoleHavePermissionUncheckedUpdateManyWithoutPermissionInputSchema } from './RoleHavePermissionUncheckedUpdateManyWithoutPermissionInputSchema';

export const RoleHavePermissionUpdateManyWithWhereWithoutPermissionInputSchema: z.ZodType<Prisma.RoleHavePermissionUpdateManyWithWhereWithoutPermissionInput> = z.object({
  where: z.lazy(() => RoleHavePermissionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RoleHavePermissionUpdateManyMutationInputSchema),z.lazy(() => RoleHavePermissionUncheckedUpdateManyWithoutPermissionInputSchema) ]),
}).strict();

export default RoleHavePermissionUpdateManyWithWhereWithoutPermissionInputSchema;
