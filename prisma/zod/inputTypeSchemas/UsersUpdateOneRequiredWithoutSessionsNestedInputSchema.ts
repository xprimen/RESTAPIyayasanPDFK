import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UsersCreateWithoutSessionsInputSchema } from './UsersCreateWithoutSessionsInputSchema';
import { UsersUncheckedCreateWithoutSessionsInputSchema } from './UsersUncheckedCreateWithoutSessionsInputSchema';
import { UsersCreateOrConnectWithoutSessionsInputSchema } from './UsersCreateOrConnectWithoutSessionsInputSchema';
import { UsersUpsertWithoutSessionsInputSchema } from './UsersUpsertWithoutSessionsInputSchema';
import { UsersWhereUniqueInputSchema } from './UsersWhereUniqueInputSchema';
import { UsersUpdateToOneWithWhereWithoutSessionsInputSchema } from './UsersUpdateToOneWithWhereWithoutSessionsInputSchema';
import { UsersUpdateWithoutSessionsInputSchema } from './UsersUpdateWithoutSessionsInputSchema';
import { UsersUncheckedUpdateWithoutSessionsInputSchema } from './UsersUncheckedUpdateWithoutSessionsInputSchema';

export const UsersUpdateOneRequiredWithoutSessionsNestedInputSchema: z.ZodType<Prisma.UsersUpdateOneRequiredWithoutSessionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UsersCreateWithoutSessionsInputSchema),z.lazy(() => UsersUncheckedCreateWithoutSessionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UsersCreateOrConnectWithoutSessionsInputSchema).optional(),
  upsert: z.lazy(() => UsersUpsertWithoutSessionsInputSchema).optional(),
  connect: z.lazy(() => UsersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UsersUpdateToOneWithWhereWithoutSessionsInputSchema),z.lazy(() => UsersUpdateWithoutSessionsInputSchema),z.lazy(() => UsersUncheckedUpdateWithoutSessionsInputSchema) ]).optional(),
}).strict();

export default UsersUpdateOneRequiredWithoutSessionsNestedInputSchema;
