import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProfilesCreateManyInputSchema } from '../inputTypeSchemas/ProfilesCreateManyInputSchema'

export const ProfilesCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ProfilesCreateManyAndReturnArgs> = z.object({
  data: z.union([ ProfilesCreateManyInputSchema,ProfilesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ProfilesCreateManyAndReturnArgsSchema;
