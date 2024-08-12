import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleHavePermissionCreateWithoutRoleInputSchema } from './RoleHavePermissionCreateWithoutRoleInputSchema';
import { RoleHavePermissionUncheckedCreateWithoutRoleInputSchema } from './RoleHavePermissionUncheckedCreateWithoutRoleInputSchema';
import { RoleHavePermissionCreateOrConnectWithoutRoleInputSchema } from './RoleHavePermissionCreateOrConnectWithoutRoleInputSchema';
import { RoleHavePermissionUpsertWithWhereUniqueWithoutRoleInputSchema } from './RoleHavePermissionUpsertWithWhereUniqueWithoutRoleInputSchema';
import { RoleHavePermissionCreateManyRoleInputEnvelopeSchema } from './RoleHavePermissionCreateManyRoleInputEnvelopeSchema';
import { RoleHavePermissionWhereUniqueInputSchema } from './RoleHavePermissionWhereUniqueInputSchema';
import { RoleHavePermissionUpdateWithWhereUniqueWithoutRoleInputSchema } from './RoleHavePermissionUpdateWithWhereUniqueWithoutRoleInputSchema';
import { RoleHavePermissionUpdateManyWithWhereWithoutRoleInputSchema } from './RoleHavePermissionUpdateManyWithWhereWithoutRoleInputSchema';
import { RoleHavePermissionScalarWhereInputSchema } from './RoleHavePermissionScalarWhereInputSchema';

export const RoleHavePermissionUpdateManyWithoutRoleNestedInputSchema: z.ZodType<Prisma.RoleHavePermissionUpdateManyWithoutRoleNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoleHavePermissionCreateWithoutRoleInputSchema),z.lazy(() => RoleHavePermissionCreateWithoutRoleInputSchema).array(),z.lazy(() => RoleHavePermissionUncheckedCreateWithoutRoleInputSchema),z.lazy(() => RoleHavePermissionUncheckedCreateWithoutRoleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleHavePermissionCreateOrConnectWithoutRoleInputSchema),z.lazy(() => RoleHavePermissionCreateOrConnectWithoutRoleInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RoleHavePermissionUpsertWithWhereUniqueWithoutRoleInputSchema),z.lazy(() => RoleHavePermissionUpsertWithWhereUniqueWithoutRoleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoleHavePermissionCreateManyRoleInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RoleHavePermissionWhereUniqueInputSchema),z.lazy(() => RoleHavePermissionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RoleHavePermissionWhereUniqueInputSchema),z.lazy(() => RoleHavePermissionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RoleHavePermissionWhereUniqueInputSchema),z.lazy(() => RoleHavePermissionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoleHavePermissionWhereUniqueInputSchema),z.lazy(() => RoleHavePermissionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RoleHavePermissionUpdateWithWhereUniqueWithoutRoleInputSchema),z.lazy(() => RoleHavePermissionUpdateWithWhereUniqueWithoutRoleInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RoleHavePermissionUpdateManyWithWhereWithoutRoleInputSchema),z.lazy(() => RoleHavePermissionUpdateManyWithWhereWithoutRoleInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RoleHavePermissionScalarWhereInputSchema),z.lazy(() => RoleHavePermissionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default RoleHavePermissionUpdateManyWithoutRoleNestedInputSchema;
