import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleHavePermissionSelectSchema } from '../inputTypeSchemas/RoleHavePermissionSelectSchema';
import { RoleHavePermissionIncludeSchema } from '../inputTypeSchemas/RoleHavePermissionIncludeSchema';

export const RoleHavePermissionArgsSchema: z.ZodType<Prisma.RoleHavePermissionDefaultArgs> = z.object({
  select: z.lazy(() => RoleHavePermissionSelectSchema).optional(),
  include: z.lazy(() => RoleHavePermissionIncludeSchema).optional(),
}).strict();

export default RoleHavePermissionArgsSchema;
