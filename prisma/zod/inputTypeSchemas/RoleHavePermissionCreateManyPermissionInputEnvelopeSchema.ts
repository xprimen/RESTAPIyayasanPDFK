import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleHavePermissionCreateManyPermissionInputSchema } from './RoleHavePermissionCreateManyPermissionInputSchema';

export const RoleHavePermissionCreateManyPermissionInputEnvelopeSchema: z.ZodType<Prisma.RoleHavePermissionCreateManyPermissionInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RoleHavePermissionCreateManyPermissionInputSchema),z.lazy(() => RoleHavePermissionCreateManyPermissionInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default RoleHavePermissionCreateManyPermissionInputEnvelopeSchema;
