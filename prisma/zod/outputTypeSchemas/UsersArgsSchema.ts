import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UsersSelectSchema } from '../inputTypeSchemas/UsersSelectSchema';
import { UsersIncludeSchema } from '../inputTypeSchemas/UsersIncludeSchema';

export const UsersArgsSchema: z.ZodType<Prisma.UsersDefaultArgs> = z.object({
  select: z.lazy(() => UsersSelectSchema).optional(),
  include: z.lazy(() => UsersIncludeSchema).optional(),
}).strict();

export default UsersArgsSchema;
