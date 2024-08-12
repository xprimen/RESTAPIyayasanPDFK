import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UsersUpdateWithoutSessionsInputSchema } from './UsersUpdateWithoutSessionsInputSchema';
import { UsersUncheckedUpdateWithoutSessionsInputSchema } from './UsersUncheckedUpdateWithoutSessionsInputSchema';
import { UsersCreateWithoutSessionsInputSchema } from './UsersCreateWithoutSessionsInputSchema';
import { UsersUncheckedCreateWithoutSessionsInputSchema } from './UsersUncheckedCreateWithoutSessionsInputSchema';
import { UsersWhereInputSchema } from './UsersWhereInputSchema';

export const UsersUpsertWithoutSessionsInputSchema: z.ZodType<Prisma.UsersUpsertWithoutSessionsInput> = z.object({
  update: z.union([ z.lazy(() => UsersUpdateWithoutSessionsInputSchema),z.lazy(() => UsersUncheckedUpdateWithoutSessionsInputSchema) ]),
  create: z.union([ z.lazy(() => UsersCreateWithoutSessionsInputSchema),z.lazy(() => UsersUncheckedCreateWithoutSessionsInputSchema) ]),
  where: z.lazy(() => UsersWhereInputSchema).optional()
}).strict();

export default UsersUpsertWithoutSessionsInputSchema;
