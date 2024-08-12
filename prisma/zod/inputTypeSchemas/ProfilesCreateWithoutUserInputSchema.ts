import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ProfilesCreateWithoutUserInputSchema: z.ZodType<Prisma.ProfilesCreateWithoutUserInput> = z.object({
  name: z.string(),
  bio: z.string().optional().nullable()
}).strict();

export default ProfilesCreateWithoutUserInputSchema;
