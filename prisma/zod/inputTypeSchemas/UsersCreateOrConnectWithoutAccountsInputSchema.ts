import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UsersWhereUniqueInputSchema } from './UsersWhereUniqueInputSchema';
import { UsersCreateWithoutAccountsInputSchema } from './UsersCreateWithoutAccountsInputSchema';
import { UsersUncheckedCreateWithoutAccountsInputSchema } from './UsersUncheckedCreateWithoutAccountsInputSchema';

export const UsersCreateOrConnectWithoutAccountsInputSchema: z.ZodType<Prisma.UsersCreateOrConnectWithoutAccountsInput> = z.object({
  where: z.lazy(() => UsersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UsersCreateWithoutAccountsInputSchema),z.lazy(() => UsersUncheckedCreateWithoutAccountsInputSchema) ]),
}).strict();

export default UsersCreateOrConnectWithoutAccountsInputSchema;
