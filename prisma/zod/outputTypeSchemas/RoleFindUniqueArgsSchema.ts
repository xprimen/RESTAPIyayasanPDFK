import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleIncludeSchema } from '../inputTypeSchemas/RoleIncludeSchema'
import { RoleWhereUniqueInputSchema } from '../inputTypeSchemas/RoleWhereUniqueInputSchema'
import { RoleHavePermissionFindManyArgsSchema } from "../outputTypeSchemas/RoleHavePermissionFindManyArgsSchema"
import { UsersFindManyArgsSchema } from "../outputTypeSchemas/UsersFindManyArgsSchema"
import { RoleCountOutputTypeArgsSchema } from "../outputTypeSchemas/RoleCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RoleSelectSchema: z.ZodType<Prisma.RoleSelect> = z.object({
  id: z.boolean().optional(),
  rolekey: z.boolean().optional(),
  rolename: z.boolean().optional(),
  permissions: z.union([z.boolean(),z.lazy(() => RoleHavePermissionFindManyArgsSchema)]).optional(),
  users: z.union([z.boolean(),z.lazy(() => UsersFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RoleCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const RoleFindUniqueArgsSchema: z.ZodType<Prisma.RoleFindUniqueArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereUniqueInputSchema,
}).strict() ;

export default RoleFindUniqueArgsSchema;
