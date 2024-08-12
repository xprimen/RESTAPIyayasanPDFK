import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UsersCreateWithoutRoleInputSchema } from './UsersCreateWithoutRoleInputSchema';
import { UsersUncheckedCreateWithoutRoleInputSchema } from './UsersUncheckedCreateWithoutRoleInputSchema';
import { UsersCreateOrConnectWithoutRoleInputSchema } from './UsersCreateOrConnectWithoutRoleInputSchema';
import { UsersUpsertWithWhereUniqueWithoutRoleInputSchema } from './UsersUpsertWithWhereUniqueWithoutRoleInputSchema';
import { UsersCreateManyRoleInputEnvelopeSchema } from './UsersCreateManyRoleInputEnvelopeSchema';
import { UsersWhereUniqueInputSchema } from './UsersWhereUniqueInputSchema';
import { UsersUpdateWithWhereUniqueWithoutRoleInputSchema } from './UsersUpdateWithWhereUniqueWithoutRoleInputSchema';
import { UsersUpdateManyWithWhereWithoutRoleInputSchema } from './UsersUpdateManyWithWhereWithoutRoleInputSchema';
import { UsersScalarWhereInputSchema } from './UsersScalarWhereInputSchema';

export const UsersUncheckedUpdateManyWithoutRoleNestedInputSchema: z.ZodType<Prisma.UsersUncheckedUpdateManyWithoutRoleNestedInput> = z.object({
  create: z.union([ z.lazy(() => UsersCreateWithoutRoleInputSchema),z.lazy(() => UsersCreateWithoutRoleInputSchema).array(),z.lazy(() => UsersUncheckedCreateWithoutRoleInputSchema),z.lazy(() => UsersUncheckedCreateWithoutRoleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UsersCreateOrConnectWithoutRoleInputSchema),z.lazy(() => UsersCreateOrConnectWithoutRoleInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UsersUpsertWithWhereUniqueWithoutRoleInputSchema),z.lazy(() => UsersUpsertWithWhereUniqueWithoutRoleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UsersCreateManyRoleInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UsersWhereUniqueInputSchema),z.lazy(() => UsersWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UsersWhereUniqueInputSchema),z.lazy(() => UsersWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UsersWhereUniqueInputSchema),z.lazy(() => UsersWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UsersWhereUniqueInputSchema),z.lazy(() => UsersWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UsersUpdateWithWhereUniqueWithoutRoleInputSchema),z.lazy(() => UsersUpdateWithWhereUniqueWithoutRoleInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UsersUpdateManyWithWhereWithoutRoleInputSchema),z.lazy(() => UsersUpdateManyWithWhereWithoutRoleInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UsersScalarWhereInputSchema),z.lazy(() => UsersScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default UsersUncheckedUpdateManyWithoutRoleNestedInputSchema;
