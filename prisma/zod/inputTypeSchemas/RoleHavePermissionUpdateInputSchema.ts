import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleUpdateOneRequiredWithoutPermissionsNestedInputSchema } from './RoleUpdateOneRequiredWithoutPermissionsNestedInputSchema';
import { PermissionUpdateOneRequiredWithoutRolesNestedInputSchema } from './PermissionUpdateOneRequiredWithoutRolesNestedInputSchema';

export const RoleHavePermissionUpdateInputSchema: z.ZodType<Prisma.RoleHavePermissionUpdateInput> = z.object({
  role: z.lazy(() => RoleUpdateOneRequiredWithoutPermissionsNestedInputSchema).optional(),
  permission: z.lazy(() => PermissionUpdateOneRequiredWithoutRolesNestedInputSchema).optional()
}).strict();

export default RoleHavePermissionUpdateInputSchema;
