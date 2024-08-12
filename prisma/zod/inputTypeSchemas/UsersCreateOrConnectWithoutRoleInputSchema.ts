import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UsersWhereUniqueInputSchema } from './UsersWhereUniqueInputSchema';
import { UsersCreateWithoutRoleInputSchema } from './UsersCreateWithoutRoleInputSchema';
import { UsersUncheckedCreateWithoutRoleInputSchema } from './UsersUncheckedCreateWithoutRoleInputSchema';

export const UsersCreateOrConnectWithoutRoleInputSchema: z.ZodType<Prisma.UsersCreateOrConnectWithoutRoleInput> = z.object({
  where: z.lazy(() => UsersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UsersCreateWithoutRoleInputSchema),z.lazy(() => UsersUncheckedCreateWithoutRoleInputSchema) ]),
}).strict();

export default UsersCreateOrConnectWithoutRoleInputSchema;
