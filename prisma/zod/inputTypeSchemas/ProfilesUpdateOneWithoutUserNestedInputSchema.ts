import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProfilesCreateWithoutUserInputSchema } from './ProfilesCreateWithoutUserInputSchema';
import { ProfilesUncheckedCreateWithoutUserInputSchema } from './ProfilesUncheckedCreateWithoutUserInputSchema';
import { ProfilesCreateOrConnectWithoutUserInputSchema } from './ProfilesCreateOrConnectWithoutUserInputSchema';
import { ProfilesUpsertWithoutUserInputSchema } from './ProfilesUpsertWithoutUserInputSchema';
import { ProfilesWhereInputSchema } from './ProfilesWhereInputSchema';
import { ProfilesWhereUniqueInputSchema } from './ProfilesWhereUniqueInputSchema';
import { ProfilesUpdateToOneWithWhereWithoutUserInputSchema } from './ProfilesUpdateToOneWithWhereWithoutUserInputSchema';
import { ProfilesUpdateWithoutUserInputSchema } from './ProfilesUpdateWithoutUserInputSchema';
import { ProfilesUncheckedUpdateWithoutUserInputSchema } from './ProfilesUncheckedUpdateWithoutUserInputSchema';

export const ProfilesUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.ProfilesUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProfilesCreateWithoutUserInputSchema),z.lazy(() => ProfilesUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProfilesCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => ProfilesUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ProfilesWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ProfilesWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ProfilesWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProfilesUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => ProfilesUpdateWithoutUserInputSchema),z.lazy(() => ProfilesUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export default ProfilesUpdateOneWithoutUserNestedInputSchema;
