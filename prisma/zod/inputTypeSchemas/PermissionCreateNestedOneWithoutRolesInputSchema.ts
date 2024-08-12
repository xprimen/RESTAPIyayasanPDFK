import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PermissionCreateWithoutRolesInputSchema } from './PermissionCreateWithoutRolesInputSchema';
import { PermissionUncheckedCreateWithoutRolesInputSchema } from './PermissionUncheckedCreateWithoutRolesInputSchema';
import { PermissionCreateOrConnectWithoutRolesInputSchema } from './PermissionCreateOrConnectWithoutRolesInputSchema';
import { PermissionWhereUniqueInputSchema } from './PermissionWhereUniqueInputSchema';

export const PermissionCreateNestedOneWithoutRolesInputSchema: z.ZodType<Prisma.PermissionCreateNestedOneWithoutRolesInput> = z.object({
  create: z.union([ z.lazy(() => PermissionCreateWithoutRolesInputSchema),z.lazy(() => PermissionUncheckedCreateWithoutRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PermissionCreateOrConnectWithoutRolesInputSchema).optional(),
  connect: z.lazy(() => PermissionWhereUniqueInputSchema).optional()
}).strict();

export default PermissionCreateNestedOneWithoutRolesInputSchema;
