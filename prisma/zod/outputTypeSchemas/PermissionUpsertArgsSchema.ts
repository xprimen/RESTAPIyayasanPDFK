import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PermissionIncludeSchema } from '../inputTypeSchemas/PermissionIncludeSchema'
import { PermissionWhereUniqueInputSchema } from '../inputTypeSchemas/PermissionWhereUniqueInputSchema'
import { PermissionCreateInputSchema } from '../inputTypeSchemas/PermissionCreateInputSchema'
import { PermissionUncheckedCreateInputSchema } from '../inputTypeSchemas/PermissionUncheckedCreateInputSchema'
import { PermissionUpdateInputSchema } from '../inputTypeSchemas/PermissionUpdateInputSchema'
import { PermissionUncheckedUpdateInputSchema } from '../inputTypeSchemas/PermissionUncheckedUpdateInputSchema'
import { RoleHavePermissionFindManyArgsSchema } from "../outputTypeSchemas/RoleHavePermissionFindManyArgsSchema"
import { PermissionCountOutputTypeArgsSchema } from "../outputTypeSchemas/PermissionCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PermissionSelectSchema: z.ZodType<Prisma.PermissionSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  roles: z.union([z.boolean(),z.lazy(() => RoleHavePermissionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PermissionCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const PermissionUpsertArgsSchema: z.ZodType<Prisma.PermissionUpsertArgs> = z.object({
  select: PermissionSelectSchema.optional(),
  include: PermissionIncludeSchema.optional(),
  where: PermissionWhereUniqueInputSchema,
  create: z.union([ PermissionCreateInputSchema,PermissionUncheckedCreateInputSchema ]),
  update: z.union([ PermissionUpdateInputSchema,PermissionUncheckedUpdateInputSchema ]),
}).strict() ;

export default PermissionUpsertArgsSchema;
