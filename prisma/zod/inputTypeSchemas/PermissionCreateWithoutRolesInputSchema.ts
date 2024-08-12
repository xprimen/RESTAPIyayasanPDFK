import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PermissionCreateWithoutRolesInputSchema: z.ZodType<Prisma.PermissionCreateWithoutRolesInput> = z.object({
  name: z.string(),
  description: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable()
}).strict();

export default PermissionCreateWithoutRolesInputSchema;
