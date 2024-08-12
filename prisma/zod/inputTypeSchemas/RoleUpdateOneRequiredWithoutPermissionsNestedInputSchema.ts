import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleCreateWithoutPermissionsInputSchema } from './RoleCreateWithoutPermissionsInputSchema';
import { RoleUncheckedCreateWithoutPermissionsInputSchema } from './RoleUncheckedCreateWithoutPermissionsInputSchema';
import { RoleCreateOrConnectWithoutPermissionsInputSchema } from './RoleCreateOrConnectWithoutPermissionsInputSchema';
import { RoleUpsertWithoutPermissionsInputSchema } from './RoleUpsertWithoutPermissionsInputSchema';
import { RoleWhereUniqueInputSchema } from './RoleWhereUniqueInputSchema';
import { RoleUpdateToOneWithWhereWithoutPermissionsInputSchema } from './RoleUpdateToOneWithWhereWithoutPermissionsInputSchema';
import { RoleUpdateWithoutPermissionsInputSchema } from './RoleUpdateWithoutPermissionsInputSchema';
import { RoleUncheckedUpdateWithoutPermissionsInputSchema } from './RoleUncheckedUpdateWithoutPermissionsInputSchema';

export const RoleUpdateOneRequiredWithoutPermissionsNestedInputSchema: z.ZodType<Prisma.RoleUpdateOneRequiredWithoutPermissionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutPermissionsInputSchema),z.lazy(() => RoleUncheckedCreateWithoutPermissionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RoleCreateOrConnectWithoutPermissionsInputSchema).optional(),
  upsert: z.lazy(() => RoleUpsertWithoutPermissionsInputSchema).optional(),
  connect: z.lazy(() => RoleWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RoleUpdateToOneWithWhereWithoutPermissionsInputSchema),z.lazy(() => RoleUpdateWithoutPermissionsInputSchema),z.lazy(() => RoleUncheckedUpdateWithoutPermissionsInputSchema) ]).optional(),
}).strict();

export default RoleUpdateOneRequiredWithoutPermissionsNestedInputSchema;
