import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UsersCreateWithoutRoleInputSchema } from './UsersCreateWithoutRoleInputSchema';
import { UsersUncheckedCreateWithoutRoleInputSchema } from './UsersUncheckedCreateWithoutRoleInputSchema';
import { UsersCreateOrConnectWithoutRoleInputSchema } from './UsersCreateOrConnectWithoutRoleInputSchema';
import { UsersCreateManyRoleInputEnvelopeSchema } from './UsersCreateManyRoleInputEnvelopeSchema';
import { UsersWhereUniqueInputSchema } from './UsersWhereUniqueInputSchema';

export const UsersUncheckedCreateNestedManyWithoutRoleInputSchema: z.ZodType<Prisma.UsersUncheckedCreateNestedManyWithoutRoleInput> = z.object({
  create: z.union([ z.lazy(() => UsersCreateWithoutRoleInputSchema),z.lazy(() => UsersCreateWithoutRoleInputSchema).array(),z.lazy(() => UsersUncheckedCreateWithoutRoleInputSchema),z.lazy(() => UsersUncheckedCreateWithoutRoleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UsersCreateOrConnectWithoutRoleInputSchema),z.lazy(() => UsersCreateOrConnectWithoutRoleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UsersCreateManyRoleInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UsersWhereUniqueInputSchema),z.lazy(() => UsersWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default UsersUncheckedCreateNestedManyWithoutRoleInputSchema;
