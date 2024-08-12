import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleHavePermissionWhereInputSchema } from '../inputTypeSchemas/RoleHavePermissionWhereInputSchema'
import { RoleHavePermissionOrderByWithAggregationInputSchema } from '../inputTypeSchemas/RoleHavePermissionOrderByWithAggregationInputSchema'
import { RoleHavePermissionScalarFieldEnumSchema } from '../inputTypeSchemas/RoleHavePermissionScalarFieldEnumSchema'
import { RoleHavePermissionScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/RoleHavePermissionScalarWhereWithAggregatesInputSchema'

export const RoleHavePermissionGroupByArgsSchema: z.ZodType<Prisma.RoleHavePermissionGroupByArgs> = z.object({
  where: RoleHavePermissionWhereInputSchema.optional(),
  orderBy: z.union([ RoleHavePermissionOrderByWithAggregationInputSchema.array(),RoleHavePermissionOrderByWithAggregationInputSchema ]).optional(),
  by: RoleHavePermissionScalarFieldEnumSchema.array(),
  having: RoleHavePermissionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default RoleHavePermissionGroupByArgsSchema;
