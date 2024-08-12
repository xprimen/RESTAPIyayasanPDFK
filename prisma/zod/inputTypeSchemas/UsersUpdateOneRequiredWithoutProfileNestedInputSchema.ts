import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UsersCreateWithoutProfileInputSchema } from './UsersCreateWithoutProfileInputSchema';
import { UsersUncheckedCreateWithoutProfileInputSchema } from './UsersUncheckedCreateWithoutProfileInputSchema';
import { UsersCreateOrConnectWithoutProfileInputSchema } from './UsersCreateOrConnectWithoutProfileInputSchema';
import { UsersUpsertWithoutProfileInputSchema } from './UsersUpsertWithoutProfileInputSchema';
import { UsersWhereUniqueInputSchema } from './UsersWhereUniqueInputSchema';
import { UsersUpdateToOneWithWhereWithoutProfileInputSchema } from './UsersUpdateToOneWithWhereWithoutProfileInputSchema';
import { UsersUpdateWithoutProfileInputSchema } from './UsersUpdateWithoutProfileInputSchema';
import { UsersUncheckedUpdateWithoutProfileInputSchema } from './UsersUncheckedUpdateWithoutProfileInputSchema';

export const UsersUpdateOneRequiredWithoutProfileNestedInputSchema: z.ZodType<Prisma.UsersUpdateOneRequiredWithoutProfileNestedInput> = z.object({
  create: z.union([ z.lazy(() => UsersCreateWithoutProfileInputSchema),z.lazy(() => UsersUncheckedCreateWithoutProfileInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UsersCreateOrConnectWithoutProfileInputSchema).optional(),
  upsert: z.lazy(() => UsersUpsertWithoutProfileInputSchema).optional(),
  connect: z.lazy(() => UsersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UsersUpdateToOneWithWhereWithoutProfileInputSchema),z.lazy(() => UsersUpdateWithoutProfileInputSchema),z.lazy(() => UsersUncheckedUpdateWithoutProfileInputSchema) ]).optional(),
}).strict();

export default UsersUpdateOneRequiredWithoutProfileNestedInputSchema;
