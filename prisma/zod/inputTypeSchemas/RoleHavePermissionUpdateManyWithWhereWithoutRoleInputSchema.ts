import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleHavePermissionScalarWhereInputSchema } from './RoleHavePermissionScalarWhereInputSchema';
import { RoleHavePermissionUpdateManyMutationInputSchema } from './RoleHavePermissionUpdateManyMutationInputSchema';
import { RoleHavePermissionUncheckedUpdateManyWithoutRoleInputSchema } from './RoleHavePermissionUncheckedUpdateManyWithoutRoleInputSchema';

export const RoleHavePermissionUpdateManyWithWhereWithoutRoleInputSchema: z.ZodType<Prisma.RoleHavePermissionUpdateManyWithWhereWithoutRoleInput> = z.object({
  where: z.lazy(() => RoleHavePermissionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RoleHavePermissionUpdateManyMutationInputSchema),z.lazy(() => RoleHavePermissionUncheckedUpdateManyWithoutRoleInputSchema) ]),
}).strict();

export default RoleHavePermissionUpdateManyWithWhereWithoutRoleInputSchema;
