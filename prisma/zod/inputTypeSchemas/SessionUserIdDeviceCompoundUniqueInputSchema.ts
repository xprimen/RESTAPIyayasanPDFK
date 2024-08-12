import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SessionUserIdDeviceCompoundUniqueInputSchema: z.ZodType<Prisma.SessionUserIdDeviceCompoundUniqueInput> = z.object({
  userId: z.string(),
  device: z.string()
}).strict();

export default SessionUserIdDeviceCompoundUniqueInputSchema;
