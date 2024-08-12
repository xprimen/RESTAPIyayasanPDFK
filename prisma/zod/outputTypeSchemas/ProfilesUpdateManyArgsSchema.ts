import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProfilesUpdateManyMutationInputSchema } from '../inputTypeSchemas/ProfilesUpdateManyMutationInputSchema'
import { ProfilesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ProfilesUncheckedUpdateManyInputSchema'
import { ProfilesWhereInputSchema } from '../inputTypeSchemas/ProfilesWhereInputSchema'

export const ProfilesUpdateManyArgsSchema: z.ZodType<Prisma.ProfilesUpdateManyArgs> = z.object({
  data: z.union([ ProfilesUpdateManyMutationInputSchema,ProfilesUncheckedUpdateManyInputSchema ]),
  where: ProfilesWhereInputSchema.optional(),
}).strict() ;

export default ProfilesUpdateManyArgsSchema;
