import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProfilesIncludeSchema } from '../inputTypeSchemas/ProfilesIncludeSchema'
import { ProfilesWhereUniqueInputSchema } from '../inputTypeSchemas/ProfilesWhereUniqueInputSchema'
import { ProfilesCreateInputSchema } from '../inputTypeSchemas/ProfilesCreateInputSchema'
import { ProfilesUncheckedCreateInputSchema } from '../inputTypeSchemas/ProfilesUncheckedCreateInputSchema'
import { ProfilesUpdateInputSchema } from '../inputTypeSchemas/ProfilesUpdateInputSchema'
import { ProfilesUncheckedUpdateInputSchema } from '../inputTypeSchemas/ProfilesUncheckedUpdateInputSchema'
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

export const ProfilesUpsertArgsSchema: z.ZodType<Prisma.ProfilesUpsertArgs> = z.object({
  select: ProfilesSelectSchema.optional(),
  include: ProfilesIncludeSchema.optional(),
  where: ProfilesWhereUniqueInputSchema,
  create: z.union([ ProfilesCreateInputSchema,ProfilesUncheckedCreateInputSchema ]),
  update: z.union([ ProfilesUpdateInputSchema,ProfilesUncheckedUpdateInputSchema ]),
}).strict() ;

export default ProfilesUpsertArgsSchema;
