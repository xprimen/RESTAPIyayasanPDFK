import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleHavePermissionCreateWithoutRoleInputSchema } from './RoleHavePermissionCreateWithoutRoleInputSchema';
import { RoleHavePermissionUncheckedCreateWithoutRoleInputSchema } from './RoleHavePermissionUncheckedCreateWithoutRoleInputSchema';
import { RoleHavePermissionCreateOrConnectWithoutRoleInputSchema } from './RoleHavePermissionCreateOrConnectWithoutRoleInputSchema';
import { RoleHavePermissionCreateManyRoleInputEnvelopeSchema } from './RoleHavePermissionCreateManyRoleInputEnvelopeSchema';
import { RoleHavePermissionWhereUniqueInputSchema } from './RoleHavePermissionWhereUniqueInputSchema';

export const RoleHavePermissionUncheckedCreateNestedManyWithoutRoleInputSchema: z.ZodType<Prisma.RoleHavePermissionUncheckedCreateNestedManyWithoutRoleInput> = z.object({
  create: z.union([ z.lazy(() => RoleHavePermissionCreateWithoutRoleInputSchema),z.lazy(() => RoleHavePermissionCreateWithoutRoleInputSchema).array(),z.lazy(() => RoleHavePermissionUncheckedCreateWithoutRoleInputSchema),z.lazy(() => RoleHavePermissionUncheckedCreateWithoutRoleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleHavePermissionCreateOrConnectWithoutRoleInputSchema),z.lazy(() => RoleHavePermissionCreateOrConnectWithoutRoleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoleHavePermissionCreateManyRoleInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RoleHavePermissionWhereUniqueInputSchema),z.lazy(() => RoleHavePermissionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default RoleHavePermissionUncheckedCreateNestedManyWithoutRoleInputSchema;
