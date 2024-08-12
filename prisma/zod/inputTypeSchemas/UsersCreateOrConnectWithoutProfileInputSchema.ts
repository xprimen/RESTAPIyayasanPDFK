import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UsersWhereUniqueInputSchema } from './UsersWhereUniqueInputSchema';
import { UsersCreateWithoutProfileInputSchema } from './UsersCreateWithoutProfileInputSchema';
import { UsersUncheckedCreateWithoutProfileInputSchema } from './UsersUncheckedCreateWithoutProfileInputSchema';

export const UsersCreateOrConnectWithoutProfileInputSchema: z.ZodType<Prisma.UsersCreateOrConnectWithoutProfileInput> = z.object({
  where: z.lazy(() => UsersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UsersCreateWithoutProfileInputSchema),z.lazy(() => UsersUncheckedCreateWithoutProfileInputSchema) ]),
}).strict();

export default UsersCreateOrConnectWithoutProfileInputSchema;
