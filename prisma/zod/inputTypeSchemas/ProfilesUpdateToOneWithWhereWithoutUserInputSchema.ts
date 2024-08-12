import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProfilesWhereInputSchema } from './ProfilesWhereInputSchema';
import { ProfilesUpdateWithoutUserInputSchema } from './ProfilesUpdateWithoutUserInputSchema';
import { ProfilesUncheckedUpdateWithoutUserInputSchema } from './ProfilesUncheckedUpdateWithoutUserInputSchema';

export const ProfilesUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.ProfilesUpdateToOneWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => ProfilesWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProfilesUpdateWithoutUserInputSchema),z.lazy(() => ProfilesUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default ProfilesUpdateToOneWithWhereWithoutUserInputSchema;
