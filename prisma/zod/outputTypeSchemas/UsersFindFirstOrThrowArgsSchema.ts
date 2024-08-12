import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UsersIncludeSchema } from '../inputTypeSchemas/UsersIncludeSchema'
import { UsersWhereInputSchema } from '../inputTypeSchemas/UsersWhereInputSchema'
import { UsersOrderByWithRelationInputSchema } from '../inputTypeSchemas/UsersOrderByWithRelationInputSchema'
import { UsersWhereUniqueInputSchema } from '../inputTypeSchemas/UsersWhereUniqueInputSchema'
import { UsersScalarFieldEnumSchema } from '../inputTypeSchemas/UsersScalarFieldEnumSchema'
import { AccountFindManyArgsSchema } from "../outputTypeSchemas/AccountFindManyArgsSchema"
import { SessionFindManyArgsSchema } from "../outputTypeSchemas/SessionFindManyArgsSchema"
import { RoleArgsSchema } from "../outputTypeSchemas/RoleArgsSchema"
import { ProfilesArgsSchema } from "../outputTypeSchemas/ProfilesArgsSchema"
import { UsersCountOutputTypeArgsSchema } from "../outputTypeSchemas/UsersCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UsersSelectSchema: z.ZodType<Prisma.UsersSelect> = z.object({
  id: z.boolean().optional(),
  username: z.boolean().optional(),
  password: z.boolean().optional(),
  email: z.boolean().optional(),
  emailVerified: z.boolean().optional(),
  image: z.boolean().optional(),
  roleId: z.boolean().optional(),
  active: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  accounts: z.union([z.boolean(),z.lazy(() => AccountFindManyArgsSchema)]).optional(),
  sessions: z.union([z.boolean(),z.lazy(() => SessionFindManyArgsSchema)]).optional(),
  role: z.union([z.boolean(),z.lazy(() => RoleArgsSchema)]).optional(),
  profile: z.union([z.boolean(),z.lazy(() => ProfilesArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UsersCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UsersFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UsersFindFirstOrThrowArgs> = z.object({
  select: UsersSelectSchema.optional(),
  include: UsersIncludeSchema.optional(),
  where: UsersWhereInputSchema.optional(),
  orderBy: z.union([ UsersOrderByWithRelationInputSchema.array(),UsersOrderByWithRelationInputSchema ]).optional(),
  cursor: UsersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UsersScalarFieldEnumSchema,UsersScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default UsersFindFirstOrThrowArgsSchema;
