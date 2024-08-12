import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProfilesUpdateWithoutUserInputSchema } from './ProfilesUpdateWithoutUserInputSchema';
import { ProfilesUncheckedUpdateWithoutUserInputSchema } from './ProfilesUncheckedUpdateWithoutUserInputSchema';
import { ProfilesCreateWithoutUserInputSchema } from './ProfilesCreateWithoutUserInputSchema';
import { ProfilesUncheckedCreateWithoutUserInputSchema } from './ProfilesUncheckedCreateWithoutUserInputSchema';
import { ProfilesWhereInputSchema } from './ProfilesWhereInputSchema';

export const ProfilesUpsertWithoutUserInputSchema: z.ZodType<Prisma.ProfilesUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => ProfilesUpdateWithoutUserInputSchema),z.lazy(() => ProfilesUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => ProfilesCreateWithoutUserInputSchema),z.lazy(() => ProfilesUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => ProfilesWhereInputSchema).optional()
}).strict();

export default ProfilesUpsertWithoutUserInputSchema;
