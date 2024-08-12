import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UsersCountOutputTypeSelectSchema } from './UsersCountOutputTypeSelectSchema';

export const UsersCountOutputTypeArgsSchema: z.ZodType<Prisma.UsersCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UsersCountOutputTypeSelectSchema).nullish(),
}).strict();

export default UsersCountOutputTypeSelectSchema;
