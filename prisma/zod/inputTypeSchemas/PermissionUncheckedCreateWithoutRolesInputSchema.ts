import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PermissionUncheckedCreateWithoutRolesInputSchema: z.ZodType<Prisma.PermissionUncheckedCreateWithoutRolesInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  description: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable()
}).strict();

export default PermissionUncheckedCreateWithoutRolesInputSchema;
