import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UsersCreateWithoutProfileInputSchema } from './UsersCreateWithoutProfileInputSchema';
import { UsersUncheckedCreateWithoutProfileInputSchema } from './UsersUncheckedCreateWithoutProfileInputSchema';
import { UsersCreateOrConnectWithoutProfileInputSchema } from './UsersCreateOrConnectWithoutProfileInputSchema';
import { UsersWhereUniqueInputSchema } from './UsersWhereUniqueInputSchema';

export const UsersCreateNestedOneWithoutProfileInputSchema: z.ZodType<Prisma.UsersCreateNestedOneWithoutProfileInput> = z.object({
  create: z.union([ z.lazy(() => UsersCreateWithoutProfileInputSchema),z.lazy(() => UsersUncheckedCreateWithoutProfileInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UsersCreateOrConnectWithoutProfileInputSchema).optional(),
  connect: z.lazy(() => UsersWhereUniqueInputSchema).optional()
}).strict();

export default UsersCreateNestedOneWithoutProfileInputSchema;
