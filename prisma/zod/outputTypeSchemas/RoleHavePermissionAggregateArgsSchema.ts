import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleHavePermissionWhereInputSchema } from '../inputTypeSchemas/RoleHavePermissionWhereInputSchema'
import { RoleHavePermissionOrderByWithRelationInputSchema } from '../inputTypeSchemas/RoleHavePermissionOrderByWithRelationInputSchema'
import { RoleHavePermissionWhereUniqueInputSchema } from '../inputTypeSchemas/RoleHavePermissionWhereUniqueInputSchema'

export const RoleHavePermissionAggregateArgsSchema: z.ZodType<Prisma.RoleHavePermissionAggregateArgs> = z.object({
  where: RoleHavePermissionWhereInputSchema.optional(),
  orderBy: z.union([ RoleHavePermissionOrderByWithRelationInputSchema.array(),RoleHavePermissionOrderByWithRelationInputSchema ]).optional(),
  cursor: RoleHavePermissionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default RoleHavePermissionAggregateArgsSchema;
