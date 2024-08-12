import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UsersArgsSchema } from "../outputTypeSchemas/UsersArgsSchema"

export const AccountIncludeSchema: z.ZodType<Prisma.AccountInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UsersArgsSchema)]).optional(),
}).strict()

export default AccountIncludeSchema;
