import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleArgsSchema } from "../outputTypeSchemas/RoleArgsSchema"
import { PermissionArgsSchema } from "../outputTypeSchemas/PermissionArgsSchema"

export const RoleHavePermissionIncludeSchema: z.ZodType<Prisma.RoleHavePermissionInclude> = z.object({
  role: z.union([z.boolean(),z.lazy(() => RoleArgsSchema)]).optional(),
  permission: z.union([z.boolean(),z.lazy(() => PermissionArgsSchema)]).optional(),
}).strict()

export default RoleHavePermissionIncludeSchema;
