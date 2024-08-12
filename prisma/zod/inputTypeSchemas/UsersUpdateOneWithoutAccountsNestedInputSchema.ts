import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UsersCreateWithoutAccountsInputSchema } from './UsersCreateWithoutAccountsInputSchema';
import { UsersUncheckedCreateWithoutAccountsInputSchema } from './UsersUncheckedCreateWithoutAccountsInputSchema';
import { UsersCreateOrConnectWithoutAccountsInputSchema } from './UsersCreateOrConnectWithoutAccountsInputSchema';
import { UsersUpsertWithoutAccountsInputSchema } from './UsersUpsertWithoutAccountsInputSchema';
import { UsersWhereInputSchema } from './UsersWhereInputSchema';
import { UsersWhereUniqueInputSchema } from './UsersWhereUniqueInputSchema';
import { UsersUpdateToOneWithWhereWithoutAccountsInputSchema } from './UsersUpdateToOneWithWhereWithoutAccountsInputSchema';
import { UsersUpdateWithoutAccountsInputSchema } from './UsersUpdateWithoutAccountsInputSchema';
import { UsersUncheckedUpdateWithoutAccountsInputSchema } from './UsersUncheckedUpdateWithoutAccountsInputSchema';

export const UsersUpdateOneWithoutAccountsNestedInputSchema: z.ZodType<Prisma.UsersUpdateOneWithoutAccountsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UsersCreateWithoutAccountsInputSchema),z.lazy(() => UsersUncheckedCreateWithoutAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UsersCreateOrConnectWithoutAccountsInputSchema).optional(),
  upsert: z.lazy(() => UsersUpsertWithoutAccountsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UsersWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UsersWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UsersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UsersUpdateToOneWithWhereWithoutAccountsInputSchema),z.lazy(() => UsersUpdateWithoutAccountsInputSchema),z.lazy(() => UsersUncheckedUpdateWithoutAccountsInputSchema) ]).optional(),
}).strict();

export default UsersUpdateOneWithoutAccountsNestedInputSchema;
