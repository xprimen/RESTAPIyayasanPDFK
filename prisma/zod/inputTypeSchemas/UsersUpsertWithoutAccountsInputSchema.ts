import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UsersUpdateWithoutAccountsInputSchema } from './UsersUpdateWithoutAccountsInputSchema';
import { UsersUncheckedUpdateWithoutAccountsInputSchema } from './UsersUncheckedUpdateWithoutAccountsInputSchema';
import { UsersCreateWithoutAccountsInputSchema } from './UsersCreateWithoutAccountsInputSchema';
import { UsersUncheckedCreateWithoutAccountsInputSchema } from './UsersUncheckedCreateWithoutAccountsInputSchema';
import { UsersWhereInputSchema } from './UsersWhereInputSchema';

export const UsersUpsertWithoutAccountsInputSchema: z.ZodType<Prisma.UsersUpsertWithoutAccountsInput> = z.object({
  update: z.union([ z.lazy(() => UsersUpdateWithoutAccountsInputSchema),z.lazy(() => UsersUncheckedUpdateWithoutAccountsInputSchema) ]),
  create: z.union([ z.lazy(() => UsersCreateWithoutAccountsInputSchema),z.lazy(() => UsersUncheckedCreateWithoutAccountsInputSchema) ]),
  where: z.lazy(() => UsersWhereInputSchema).optional()
}).strict();

export default UsersUpsertWithoutAccountsInputSchema;
