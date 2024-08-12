import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleCreateWithoutPermissionsInputSchema } from './RoleCreateWithoutPermissionsInputSchema';
import { RoleUncheckedCreateWithoutPermissionsInputSchema } from './RoleUncheckedCreateWithoutPermissionsInputSchema';
import { RoleCreateOrConnectWithoutPermissionsInputSchema } from './RoleCreateOrConnectWithoutPermissionsInputSchema';
import { RoleWhereUniqueInputSchema } from './RoleWhereUniqueInputSchema';

export const RoleCreateNestedOneWithoutPermissionsInputSchema: z.ZodType<Prisma.RoleCreateNestedOneWithoutPermissionsInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutPermissionsInputSchema),z.lazy(() => RoleUncheckedCreateWithoutPermissionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RoleCreateOrConnectWithoutPermissionsInputSchema).optional(),
  connect: z.lazy(() => RoleWhereUniqueInputSchema).optional()
}).strict();

export default RoleCreateNestedOneWithoutPermissionsInputSchema;
