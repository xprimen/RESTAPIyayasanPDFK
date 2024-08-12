import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleHavePermissionFindManyArgsSchema } from "../outputTypeSchemas/RoleHavePermissionFindManyArgsSchema"
import { UsersFindManyArgsSchema } from "../outputTypeSchemas/UsersFindManyArgsSchema"
import { RoleCountOutputTypeArgsSchema } from "../outputTypeSchemas/RoleCountOutputTypeArgsSchema"

export const RoleSelectSchema: z.ZodType<Prisma.RoleSelect> = z.object({
  id: z.boolean().optional(),
  rolekey: z.boolean().optional(),
  rolename: z.boolean().optional(),
  permissions: z.union([z.boolean(),z.lazy(() => RoleHavePermissionFindManyArgsSchema)]).optional(),
  users: z.union([z.boolean(),z.lazy(() => UsersFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RoleCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default RoleSelectSchema;
