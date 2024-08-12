import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProfilesWhereInputSchema } from '../inputTypeSchemas/ProfilesWhereInputSchema'
import { ProfilesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ProfilesOrderByWithAggregationInputSchema'
import { ProfilesScalarFieldEnumSchema } from '../inputTypeSchemas/ProfilesScalarFieldEnumSchema'
import { ProfilesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ProfilesScalarWhereWithAggregatesInputSchema'

export const ProfilesGroupByArgsSchema: z.ZodType<Prisma.ProfilesGroupByArgs> = z.object({
  where: ProfilesWhereInputSchema.optional(),
  orderBy: z.union([ ProfilesOrderByWithAggregationInputSchema.array(),ProfilesOrderByWithAggregationInputSchema ]).optional(),
  by: ProfilesScalarFieldEnumSchema.array(),
  having: ProfilesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ProfilesGroupByArgsSchema;
