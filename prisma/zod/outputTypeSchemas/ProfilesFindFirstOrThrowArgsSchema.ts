import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProfilesIncludeSchema } from '../inputTypeSchemas/ProfilesIncludeSchema'
import { ProfilesWhereInputSchema } from '../inputTypeSchemas/ProfilesWhereInputSchema'
import { ProfilesOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProfilesOrderByWithRelationInputSchema'
import { ProfilesWhereUniqueInputSchema } from '../inputTypeSchemas/ProfilesWhereUniqueInputSchema'
import { ProfilesScalarFieldEnumSchema } from '../inputTypeSchemas/ProfilesScalarFieldEnumSchema'
import { UsersArgsSchema } from "../outputTypeSchemas/UsersArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProfilesSelectSchema: z.ZodType<Prisma.ProfilesSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  bio: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UsersArgsSchema)]).optional(),
}).strict()

export const ProfilesFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProfilesFindFirstOrThrowArgs> = z.object({
  select: ProfilesSelectSchema.optional(),
  include: ProfilesIncludeSchema.optional(),
  where: ProfilesWhereInputSchema.optional(),
  orderBy: z.union([ ProfilesOrderByWithRelationInputSchema.array(),ProfilesOrderByWithRelationInputSchema ]).optional(),
  cursor: ProfilesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProfilesScalarFieldEnumSchema,ProfilesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default ProfilesFindFirstOrThrowArgsSchema;
