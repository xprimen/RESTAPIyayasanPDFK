import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PermissionCreateWithoutRolesInputSchema } from './PermissionCreateWithoutRolesInputSchema';
import { PermissionUncheckedCreateWithoutRolesInputSchema } from './PermissionUncheckedCreateWithoutRolesInputSchema';
import { PermissionCreateOrConnectWithoutRolesInputSchema } from './PermissionCreateOrConnectWithoutRolesInputSchema';
import { PermissionUpsertWithoutRolesInputSchema } from './PermissionUpsertWithoutRolesInputSchema';
import { PermissionWhereUniqueInputSchema } from './PermissionWhereUniqueInputSchema';
import { PermissionUpdateToOneWithWhereWithoutRolesInputSchema } from './PermissionUpdateToOneWithWhereWithoutRolesInputSchema';
import { PermissionUpdateWithoutRolesInputSchema } from './PermissionUpdateWithoutRolesInputSchema';
import { PermissionUncheckedUpdateWithoutRolesInputSchema } from './PermissionUncheckedUpdateWithoutRolesInputSchema';

export const PermissionUpdateOneRequiredWithoutRolesNestedInputSchema: z.ZodType<Prisma.PermissionUpdateOneRequiredWithoutRolesNestedInput> = z.object({
  create: z.union([ z.lazy(() => PermissionCreateWithoutRolesInputSchema),z.lazy(() => PermissionUncheckedCreateWithoutRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PermissionCreateOrConnectWithoutRolesInputSchema).optional(),
  upsert: z.lazy(() => PermissionUpsertWithoutRolesInputSchema).optional(),
  connect: z.lazy(() => PermissionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PermissionUpdateToOneWithWhereWithoutRolesInputSchema),z.lazy(() => PermissionUpdateWithoutRolesInputSchema),z.lazy(() => PermissionUncheckedUpdateWithoutRolesInputSchema) ]).optional(),
}).strict();

export default PermissionUpdateOneRequiredWithoutRolesNestedInputSchema;
