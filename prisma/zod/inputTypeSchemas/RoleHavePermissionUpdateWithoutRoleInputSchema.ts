import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PermissionUpdateOneRequiredWithoutRolesNestedInputSchema } from './PermissionUpdateOneRequiredWithoutRolesNestedInputSchema';

export const RoleHavePermissionUpdateWithoutRoleInputSchema: z.ZodType<Prisma.RoleHavePermissionUpdateWithoutRoleInput> = z.object({
  permission: z.lazy(() => PermissionUpdateOneRequiredWithoutRolesNestedInputSchema).optional()
}).strict();

export default RoleHavePermissionUpdateWithoutRoleInputSchema;
