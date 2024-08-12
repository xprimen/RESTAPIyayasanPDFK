import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProfilesWhereInputSchema } from '../inputTypeSchemas/ProfilesWhereInputSchema'
import { ProfilesOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProfilesOrderByWithRelationInputSchema'
import { ProfilesWhereUniqueInputSchema } from '../inputTypeSchemas/ProfilesWhereUniqueInputSchema'

export const ProfilesAggregateArgsSchema: z.ZodType<Prisma.ProfilesAggregateArgs> = z.object({
  where: ProfilesWhereInputSchema.optional(),
  orderBy: z.union([ ProfilesOrderByWithRelationInputSchema.array(),ProfilesOrderByWithRelationInputSchema ]).optional(),
  cursor: ProfilesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ProfilesAggregateArgsSchema;
