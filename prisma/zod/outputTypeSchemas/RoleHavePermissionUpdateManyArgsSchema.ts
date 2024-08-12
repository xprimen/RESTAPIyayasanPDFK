import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleHavePermissionUpdateManyMutationInputSchema } from '../inputTypeSchemas/RoleHavePermissionUpdateManyMutationInputSchema'
import { RoleHavePermissionUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/RoleHavePermissionUncheckedUpdateManyInputSchema'
import { RoleHavePermissionWhereInputSchema } from '../inputTypeSchemas/RoleHavePermissionWhereInputSchema'

export const RoleHavePermissionUpdateManyArgsSchema: z.ZodType<Prisma.RoleHavePermissionUpdateManyArgs> = z.object({
  data: z.union([ RoleHavePermissionUpdateManyMutationInputSchema,RoleHavePermissionUncheckedUpdateManyInputSchema ]),
  where: RoleHavePermissionWhereInputSchema.optional(),
}).strict() ;

export default RoleHavePermissionUpdateManyArgsSchema;
