import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const VerificationRequestCreateInputSchema: z.ZodType<Prisma.VerificationRequestCreateInput> = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default VerificationRequestCreateInputSchema;
