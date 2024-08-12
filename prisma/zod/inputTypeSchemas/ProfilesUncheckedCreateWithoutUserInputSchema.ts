import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ProfilesUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.ProfilesUncheckedCreateWithoutUserInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  bio: z.string().optional().nullable()
}).strict();

export default ProfilesUncheckedCreateWithoutUserInputSchema;
