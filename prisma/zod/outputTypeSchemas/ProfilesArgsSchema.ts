import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProfilesSelectSchema } from '../inputTypeSchemas/ProfilesSelectSchema';
import { ProfilesIncludeSchema } from '../inputTypeSchemas/ProfilesIncludeSchema';

export const ProfilesArgsSchema: z.ZodType<Prisma.ProfilesDefaultArgs> = z.object({
  select: z.lazy(() => ProfilesSelectSchema).optional(),
  include: z.lazy(() => ProfilesIncludeSchema).optional(),
}).strict();

export default ProfilesArgsSchema;
