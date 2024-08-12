import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProfilesWhereUniqueInputSchema } from './ProfilesWhereUniqueInputSchema';
import { ProfilesCreateWithoutUserInputSchema } from './ProfilesCreateWithoutUserInputSchema';
import { ProfilesUncheckedCreateWithoutUserInputSchema } from './ProfilesUncheckedCreateWithoutUserInputSchema';

export const ProfilesCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.ProfilesCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => ProfilesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProfilesCreateWithoutUserInputSchema),z.lazy(() => ProfilesUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default ProfilesCreateOrConnectWithoutUserInputSchema;
