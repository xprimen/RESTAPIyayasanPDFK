import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleHavePermissionCreateWithoutPermissionInputSchema } from './RoleHavePermissionCreateWithoutPermissionInputSchema';
import { RoleHavePermissionUncheckedCreateWithoutPermissionInputSchema } from './RoleHavePermissionUncheckedCreateWithoutPermissionInputSchema';
import { RoleHavePermissionCreateOrConnectWithoutPermissionInputSchema } from './RoleHavePermissionCreateOrConnectWithoutPermissionInputSchema';
import { RoleHavePermissionUpsertWithWhereUniqueWithoutPermissionInputSchema } from './RoleHavePermissionUpsertWithWhereUniqueWithoutPermissionInputSchema';
import { RoleHavePermissionCreateManyPermissionInputEnvelopeSchema } from './RoleHavePermissionCreateManyPermissionInputEnvelopeSchema';
import { RoleHavePermissionWhereUniqueInputSchema } from './RoleHavePermissionWhereUniqueInputSchema';
import { RoleHavePermissionUpdateWithWhereUniqueWithoutPermissionInputSchema } from './RoleHavePermissionUpdateWithWhereUniqueWithoutPermissionInputSchema';
import { RoleHavePermissionUpdateManyWithWhereWithoutPermissionInputSchema } from './RoleHavePermissionUpdateManyWithWhereWithoutPermissionInputSchema';
import { RoleHavePermissionScalarWhereInputSchema } from './RoleHavePermissionScalarWhereInputSchema';

export const RoleHavePermissionUncheckedUpdateManyWithoutPermissionNestedInputSchema: z.ZodType<Prisma.RoleHavePermissionUncheckedUpdateManyWithoutPermissionNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoleHavePermissionCreateWithoutPermissionInputSchema),z.lazy(() => RoleHavePermissionCreateWithoutPermissionInputSchema).array(),z.lazy(() => RoleHavePermissionUncheckedCreateWithoutPermissionInputSchema),z.lazy(() => RoleHavePermissionUncheckedCreateWithoutPermissionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleHavePermissionCreateOrConnectWithoutPermissionInputSchema),z.lazy(() => RoleHavePermissionCreateOrConnectWithoutPermissionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RoleHavePermissionUpsertWithWhereUniqueWithoutPermissionInputSchema),z.lazy(() => RoleHavePermissionUpsertWithWhereUniqueWithoutPermissionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoleHavePermissionCreateManyPermissionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RoleHavePermissionWhereUniqueInputSchema),z.lazy(() => RoleHavePermissionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RoleHavePermissionWhereUniqueInputSchema),z.lazy(() => RoleHavePermissionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RoleHavePermissionWhereUniqueInputSchema),z.lazy(() => RoleHavePermissionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoleHavePermissionWhereUniqueInputSchema),z.lazy(() => RoleHavePermissionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RoleHavePermissionUpdateWithWhereUniqueWithoutPermissionInputSchema),z.lazy(() => RoleHavePermissionUpdateWithWhereUniqueWithoutPermissionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RoleHavePermissionUpdateManyWithWhereWithoutPermissionInputSchema),z.lazy(() => RoleHavePermissionUpdateManyWithWhereWithoutPermissionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RoleHavePermissionScalarWhereInputSchema),z.lazy(() => RoleHavePermissionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default RoleHavePermissionUncheckedUpdateManyWithoutPermissionNestedInputSchema;
