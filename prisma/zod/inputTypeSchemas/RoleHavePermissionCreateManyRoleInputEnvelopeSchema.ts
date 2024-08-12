import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleHavePermissionCreateManyRoleInputSchema } from './RoleHavePermissionCreateManyRoleInputSchema';

export const RoleHavePermissionCreateManyRoleInputEnvelopeSchema: z.ZodType<Prisma.RoleHavePermissionCreateManyRoleInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RoleHavePermissionCreateManyRoleInputSchema),z.lazy(() => RoleHavePermissionCreateManyRoleInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default RoleHavePermissionCreateManyRoleInputEnvelopeSchema;
