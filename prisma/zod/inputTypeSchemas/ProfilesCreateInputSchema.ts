import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UsersCreateNestedOneWithoutProfileInputSchema } from './UsersCreateNestedOneWithoutProfileInputSchema';

export const ProfilesCreateInputSchema: z.ZodType<Prisma.ProfilesCreateInput> = z.object({
  name: z.string(),
  bio: z.string().optional().nullable(),
  user: z.lazy(() => UsersCreateNestedOneWithoutProfileInputSchema)
}).strict();

export default ProfilesCreateInputSchema;
