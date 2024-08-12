import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UsersArgsSchema } from "../outputTypeSchemas/UsersArgsSchema"

export const ProfilesIncludeSchema: z.ZodType<Prisma.ProfilesInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UsersArgsSchema)]).optional(),
}).strict()

export default ProfilesIncludeSchema;
