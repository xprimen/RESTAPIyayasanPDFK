import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProfilesCreateWithoutUserInputSchema } from './ProfilesCreateWithoutUserInputSchema';
import { ProfilesUncheckedCreateWithoutUserInputSchema } from './ProfilesUncheckedCreateWithoutUserInputSchema';
import { ProfilesCreateOrConnectWithoutUserInputSchema } from './ProfilesCreateOrConnectWithoutUserInputSchema';
import { ProfilesWhereUniqueInputSchema } from './ProfilesWhereUniqueInputSchema';

export const ProfilesUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.ProfilesUncheckedCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ProfilesCreateWithoutUserInputSchema),z.lazy(() => ProfilesUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProfilesCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => ProfilesWhereUniqueInputSchema).optional()
}).strict();

export default ProfilesUncheckedCreateNestedOneWithoutUserInputSchema;
