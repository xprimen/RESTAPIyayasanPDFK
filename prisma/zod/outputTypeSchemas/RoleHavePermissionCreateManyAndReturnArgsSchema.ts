import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleHavePermissionCreateManyInputSchema } from '../inputTypeSchemas/RoleHavePermissionCreateManyInputSchema'

export const RoleHavePermissionCreateManyAndReturnArgsSchema: z.ZodType<Prisma.RoleHavePermissionCreateManyAndReturnArgs> = z.object({
  data: z.union([ RoleHavePermissionCreateManyInputSchema,RoleHavePermissionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default RoleHavePermissionCreateManyAndReturnArgsSchema;
