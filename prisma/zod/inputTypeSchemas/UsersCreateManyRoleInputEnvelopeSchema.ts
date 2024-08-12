import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UsersCreateManyRoleInputSchema } from './UsersCreateManyRoleInputSchema';

export const UsersCreateManyRoleInputEnvelopeSchema: z.ZodType<Prisma.UsersCreateManyRoleInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => UsersCreateManyRoleInputSchema),z.lazy(() => UsersCreateManyRoleInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default UsersCreateManyRoleInputEnvelopeSchema;
