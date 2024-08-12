import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UsersCreateWithoutSessionsInputSchema } from './UsersCreateWithoutSessionsInputSchema';
import { UsersUncheckedCreateWithoutSessionsInputSchema } from './UsersUncheckedCreateWithoutSessionsInputSchema';
import { UsersCreateOrConnectWithoutSessionsInputSchema } from './UsersCreateOrConnectWithoutSessionsInputSchema';
import { UsersWhereUniqueInputSchema } from './UsersWhereUniqueInputSchema';

export const UsersCreateNestedOneWithoutSessionsInputSchema: z.ZodType<Prisma.UsersCreateNestedOneWithoutSessionsInput> = z.object({
  create: z.union([ z.lazy(() => UsersCreateWithoutSessionsInputSchema),z.lazy(() => UsersUncheckedCreateWithoutSessionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UsersCreateOrConnectWithoutSessionsInputSchema).optional(),
  connect: z.lazy(() => UsersWhereUniqueInputSchema).optional()
}).strict();

export default UsersCreateNestedOneWithoutSessionsInputSchema;
