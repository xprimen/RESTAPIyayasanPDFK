import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleHavePermissionCreateWithoutPermissionInputSchema } from './RoleHavePermissionCreateWithoutPermissionInputSchema';
import { RoleHavePermissionUncheckedCreateWithoutPermissionInputSchema } from './RoleHavePermissionUncheckedCreateWithoutPermissionInputSchema';
import { RoleHavePermissionCreateOrConnectWithoutPermissionInputSchema } from './RoleHavePermissionCreateOrConnectWithoutPermissionInputSchema';
import { RoleHavePermissionCreateManyPermissionInputEnvelopeSchema } from './RoleHavePermissionCreateManyPermissionInputEnvelopeSchema';
import { RoleHavePermissionWhereUniqueInputSchema } from './RoleHavePermissionWhereUniqueInputSchema';

export const RoleHavePermissionUncheckedCreateNestedManyWithoutPermissionInputSchema: z.ZodType<Prisma.RoleHavePermissionUncheckedCreateNestedManyWithoutPermissionInput> = z.object({
  create: z.union([ z.lazy(() => RoleHavePermissionCreateWithoutPermissionInputSchema),z.lazy(() => RoleHavePermissionCreateWithoutPermissionInputSchema).array(),z.lazy(() => RoleHavePermissionUncheckedCreateWithoutPermissionInputSchema),z.lazy(() => RoleHavePermissionUncheckedCreateWithoutPermissionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleHavePermissionCreateOrConnectWithoutPermissionInputSchema),z.lazy(() => RoleHavePermissionCreateOrConnectWithoutPermissionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoleHavePermissionCreateManyPermissionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RoleHavePermissionWhereUniqueInputSchema),z.lazy(() => RoleHavePermissionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default RoleHavePermissionUncheckedCreateNestedManyWithoutPermissionInputSchema;
