import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleHavePermissionIncludeSchema } from '../inputTypeSchemas/RoleHavePermissionIncludeSchema'
import { RoleHavePermissionWhereUniqueInputSchema } from '../inputTypeSchemas/RoleHavePermissionWhereUniqueInputSchema'
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

export const RoleHavePermissionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.RoleHavePermissionFindUniqueOrThrowArgs> = z.object({
  select: RoleHavePermissionSelectSchema.optional(),
  include: RoleHavePermissionIncludeSchema.optional(),
  where: RoleHavePermissionWhereUniqueInputSchema,
}).strict() ;

export default RoleHavePermissionFindUniqueOrThrowArgsSchema;
