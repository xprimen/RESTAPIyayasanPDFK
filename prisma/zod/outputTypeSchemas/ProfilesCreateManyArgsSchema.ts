import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProfilesCreateManyInputSchema } from '../inputTypeSchemas/ProfilesCreateManyInputSchema'

export const ProfilesCreateManyArgsSchema: z.ZodType<Prisma.ProfilesCreateManyArgs> = z.object({
  data: z.union([ ProfilesCreateManyInputSchema,ProfilesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ProfilesCreateManyArgsSchema;
