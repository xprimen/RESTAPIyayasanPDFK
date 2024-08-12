import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const VerificationRequestCreateManyInputSchema: z.ZodType<Prisma.VerificationRequestCreateManyInput> = z.object({
  id: z.number().int().optional(),
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default VerificationRequestCreateManyInputSchema;
