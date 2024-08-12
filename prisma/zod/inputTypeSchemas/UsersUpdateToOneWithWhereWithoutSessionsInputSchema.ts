import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UsersWhereInputSchema } from './UsersWhereInputSchema';
import { UsersUpdateWithoutSessionsInputSchema } from './UsersUpdateWithoutSessionsInputSchema';
import { UsersUncheckedUpdateWithoutSessionsInputSchema } from './UsersUncheckedUpdateWithoutSessionsInputSchema';

export const UsersUpdateToOneWithWhereWithoutSessionsInputSchema: z.ZodType<Prisma.UsersUpdateToOneWithWhereWithoutSessionsInput> = z.object({
  where: z.lazy(() => UsersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UsersUpdateWithoutSessionsInputSchema),z.lazy(() => UsersUncheckedUpdateWithoutSessionsInputSchema) ]),
}).strict();

export default UsersUpdateToOneWithWhereWithoutSessionsInputSchema;
