import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UsersWhereInputSchema } from './UsersWhereInputSchema';
import { UsersUpdateWithoutAccountsInputSchema } from './UsersUpdateWithoutAccountsInputSchema';
import { UsersUncheckedUpdateWithoutAccountsInputSchema } from './UsersUncheckedUpdateWithoutAccountsInputSchema';

export const UsersUpdateToOneWithWhereWithoutAccountsInputSchema: z.ZodType<Prisma.UsersUpdateToOneWithWhereWithoutAccountsInput> = z.object({
  where: z.lazy(() => UsersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UsersUpdateWithoutAccountsInputSchema),z.lazy(() => UsersUncheckedUpdateWithoutAccountsInputSchema) ]),
}).strict();

export default UsersUpdateToOneWithWhereWithoutAccountsInputSchema;
