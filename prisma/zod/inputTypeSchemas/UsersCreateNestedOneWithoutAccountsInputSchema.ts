import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UsersCreateWithoutAccountsInputSchema } from './UsersCreateWithoutAccountsInputSchema';
import { UsersUncheckedCreateWithoutAccountsInputSchema } from './UsersUncheckedCreateWithoutAccountsInputSchema';
import { UsersCreateOrConnectWithoutAccountsInputSchema } from './UsersCreateOrConnectWithoutAccountsInputSchema';
import { UsersWhereUniqueInputSchema } from './UsersWhereUniqueInputSchema';

export const UsersCreateNestedOneWithoutAccountsInputSchema: z.ZodType<Prisma.UsersCreateNestedOneWithoutAccountsInput> = z.object({
  create: z.union([ z.lazy(() => UsersCreateWithoutAccountsInputSchema),z.lazy(() => UsersUncheckedCreateWithoutAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UsersCreateOrConnectWithoutAccountsInputSchema).optional(),
  connect: z.lazy(() => UsersWhereUniqueInputSchema).optional()
}).strict();

export default UsersCreateNestedOneWithoutAccountsInputSchema;
