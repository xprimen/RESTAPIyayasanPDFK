import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ProfilesUncheckedCreateInputSchema: z.ZodType<Prisma.ProfilesUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  bio: z.string().optional().nullable(),
  userId: z.string()
}).strict();

export default ProfilesUncheckedCreateInputSchema;
