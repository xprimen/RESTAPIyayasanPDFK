import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleHavePermissionIncludeSchema } from '../inputTypeSchemas/RoleHavePermissionIncludeSchema'
import { RoleHavePermissionWhereInputSchema } from '../inputTypeSchemas/RoleHavePermissionWhereInputSchema'
import { RoleHavePermissionOrderByWithRelationInputSchema } from '../inputTypeSchemas/RoleHavePermissionOrderByWithRelationInputSchema'
import { RoleHavePermissionWhereUniqueInputSchema } from '../inputTypeSchemas/RoleHavePermissionWhereUniqueInputSchema'
import { RoleHavePermissionScalarFieldEnumSchema } from '../inputTypeSchemas/RoleHavePermissionScalarFieldEnumSchema'
import { RoleArgsSchema } from "../outputTypeSchemas/RoleArgsSchema"
import { PermissionArgsSchema } from "../outputTypeSchemas/PermissionArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RoleHavePermissionSelectSchema: z.ZodType<Prisma.RoleHavePermissionSelect> = z.object({
  roleId: z.boolean().optional(),
  permissionId: z.boolean().optional(),
  role: z.union([z.boolean(),z.lazy(() => RoleArgsSchema)]).optional(),
  permission: z.union([z.boolean(),z.lazy(() => PermissionArgsSchema)]).optional(),
}).strict()

export const RoleHavePermissionFindFirstArgsSchema: z.ZodType<Prisma.RoleHavePermissionFindFirstArgs> = z.object({
  select: RoleHavePermissionSelectSchema.optional(),
  include: RoleHavePermissionIncludeSchema.optional(),
  where: RoleHavePermissionWhereInputSchema.optional(),
  orderBy: z.union([ RoleHavePermissionOrderByWithRelationInputSchema.array(),RoleHavePermissionOrderByWithRelationInputSchema ]).optional(),
  cursor: RoleHavePermissionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RoleHavePermissionScalarFieldEnumSchema,RoleHavePermissionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default RoleHavePermissionFindFirstArgsSchema;
