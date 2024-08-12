import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UsersWhereInputSchema } from './UsersWhereInputSchema';
import { UsersUpdateWithoutProfileInputSchema } from './UsersUpdateWithoutProfileInputSchema';
import { UsersUncheckedUpdateWithoutProfileInputSchema } from './UsersUncheckedUpdateWithoutProfileInputSchema';

export const UsersUpdateToOneWithWhereWithoutProfileInputSchema: z.ZodType<Prisma.UsersUpdateToOneWithWhereWithoutProfileInput> = z.object({
  where: z.lazy(() => UsersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UsersUpdateWithoutProfileInputSchema),z.lazy(() => UsersUncheckedUpdateWithoutProfileInputSchema) ]),
}).strict();

export default UsersUpdateToOneWithWhereWithoutProfileInputSchema;
