import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UsersScalarWhereInputSchema } from './UsersScalarWhereInputSchema';
import { UsersUpdateManyMutationInputSchema } from './UsersUpdateManyMutationInputSchema';
import { UsersUncheckedUpdateManyWithoutRoleInputSchema } from './UsersUncheckedUpdateManyWithoutRoleInputSchema';

export const UsersUpdateManyWithWhereWithoutRoleInputSchema: z.ZodType<Prisma.UsersUpdateManyWithWhereWithoutRoleInput> = z.object({
  where: z.lazy(() => UsersScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UsersUpdateManyMutationInputSchema),z.lazy(() => UsersUncheckedUpdateManyWithoutRoleInputSchema) ]),
}).strict();

export default UsersUpdateManyWithWhereWithoutRoleInputSchema;
