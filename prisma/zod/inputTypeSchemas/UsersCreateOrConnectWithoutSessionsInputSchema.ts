import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UsersWhereUniqueInputSchema } from './UsersWhereUniqueInputSchema';
import { UsersCreateWithoutSessionsInputSchema } from './UsersCreateWithoutSessionsInputSchema';
import { UsersUncheckedCreateWithoutSessionsInputSchema } from './UsersUncheckedCreateWithoutSessionsInputSchema';

export const UsersCreateOrConnectWithoutSessionsInputSchema: z.ZodType<Prisma.UsersCreateOrConnectWithoutSessionsInput> = z.object({
  where: z.lazy(() => UsersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UsersCreateWithoutSessionsInputSchema),z.lazy(() => UsersUncheckedCreateWithoutSessionsInputSchema) ]),
}).strict();

export default UsersCreateOrConnectWithoutSessionsInputSchema;
