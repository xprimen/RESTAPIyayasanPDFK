import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UsersWhereUniqueInputSchema } from './UsersWhereUniqueInputSchema';
import { UsersUpdateWithoutRoleInputSchema } from './UsersUpdateWithoutRoleInputSchema';
import { UsersUncheckedUpdateWithoutRoleInputSchema } from './UsersUncheckedUpdateWithoutRoleInputSchema';
import { UsersCreateWithoutRoleInputSchema } from './UsersCreateWithoutRoleInputSchema';
import { UsersUncheckedCreateWithoutRoleInputSchema } from './UsersUncheckedCreateWithoutRoleInputSchema';

export const UsersUpsertWithWhereUniqueWithoutRoleInputSchema: z.ZodType<Prisma.UsersUpsertWithWhereUniqueWithoutRoleInput> = z.object({
  where: z.lazy(() => UsersWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UsersUpdateWithoutRoleInputSchema),z.lazy(() => UsersUncheckedUpdateWithoutRoleInputSchema) ]),
  create: z.union([ z.lazy(() => UsersCreateWithoutRoleInputSchema),z.lazy(() => UsersUncheckedCreateWithoutRoleInputSchema) ]),
}).strict();

export default UsersUpsertWithWhereUniqueWithoutRoleInputSchema;
