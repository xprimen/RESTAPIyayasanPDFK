import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleHavePermissionWhereInputSchema } from '../inputTypeSchemas/RoleHavePermissionWhereInputSchema'

export const RoleHavePermissionDeleteManyArgsSchema: z.ZodType<Prisma.RoleHavePermissionDeleteManyArgs> = z.object({
  where: RoleHavePermissionWhereInputSchema.optional(),
}).strict() ;

export default RoleHavePermissionDeleteManyArgsSchema;
