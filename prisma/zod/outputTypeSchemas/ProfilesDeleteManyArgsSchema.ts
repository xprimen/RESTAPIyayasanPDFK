import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProfilesWhereInputSchema } from '../inputTypeSchemas/ProfilesWhereInputSchema'

export const ProfilesDeleteManyArgsSchema: z.ZodType<Prisma.ProfilesDeleteManyArgs> = z.object({
  where: ProfilesWhereInputSchema.optional(),
}).strict() ;

export default ProfilesDeleteManyArgsSchema;
