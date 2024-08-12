import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UsersUpdateWithoutProfileInputSchema } from './UsersUpdateWithoutProfileInputSchema';
import { UsersUncheckedUpdateWithoutProfileInputSchema } from './UsersUncheckedUpdateWithoutProfileInputSchema';
import { UsersCreateWithoutProfileInputSchema } from './UsersCreateWithoutProfileInputSchema';
import { UsersUncheckedCreateWithoutProfileInputSchema } from './UsersUncheckedCreateWithoutProfileInputSchema';
import { UsersWhereInputSchema } from './UsersWhereInputSchema';

export const UsersUpsertWithoutProfileInputSchema: z.ZodType<Prisma.UsersUpsertWithoutProfileInput> = z.object({
  update: z.union([ z.lazy(() => UsersUpdateWithoutProfileInputSchema),z.lazy(() => UsersUncheckedUpdateWithoutProfileInputSchema) ]),
  create: z.union([ z.lazy(() => UsersCreateWithoutProfileInputSchema),z.lazy(() => UsersUncheckedCreateWithoutProfileInputSchema) ]),
  where: z.lazy(() => UsersWhereInputSchema).optional()
}).strict();

export default UsersUpsertWithoutProfileInputSchema;
