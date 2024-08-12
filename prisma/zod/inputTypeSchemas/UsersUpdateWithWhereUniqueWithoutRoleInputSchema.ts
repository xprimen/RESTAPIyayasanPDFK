import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UsersWhereUniqueInputSchema } from './UsersWhereUniqueInputSchema';
import { UsersUpdateWithoutRoleInputSchema } from './UsersUpdateWithoutRoleInputSchema';
import { UsersUncheckedUpdateWithoutRoleInputSchema } from './UsersUncheckedUpdateWithoutRoleInputSchema';

export const UsersUpdateWithWhereUniqueWithoutRoleInputSchema: z.ZodType<Prisma.UsersUpdateWithWhereUniqueWithoutRoleInput> = z.object({
  where: z.lazy(() => UsersWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UsersUpdateWithoutRoleInputSchema),z.lazy(() => UsersUncheckedUpdateWithoutRoleInputSchema) ]),
}).strict();

export default UsersUpdateWithWhereUniqueWithoutRoleInputSchema;
