import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleUpdateOneRequiredWithoutPermissionsNestedInputSchema } from './RoleUpdateOneRequiredWithoutPermissionsNestedInputSchema';

export const RoleHavePermissionUpdateWithoutPermissionInputSchema: z.ZodType<Prisma.RoleHavePermissionUpdateWithoutPermissionInput> = z.object({
  role: z.lazy(() => RoleUpdateOneRequiredWithoutPermissionsNestedInputSchema).optional()
}).strict();

export default RoleHavePermissionUpdateWithoutPermissionInputSchema;
