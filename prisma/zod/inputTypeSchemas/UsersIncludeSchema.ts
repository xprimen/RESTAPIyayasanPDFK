import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AccountFindManyArgsSchema } from "../outputTypeSchemas/AccountFindManyArgsSchema"
import { SessionFindManyArgsSchema } from "../outputTypeSchemas/SessionFindManyArgsSchema"
import { RoleArgsSchema } from "../outputTypeSchemas/RoleArgsSchema"
import { ProfilesArgsSchema } from "../outputTypeSchemas/ProfilesArgsSchema"
import { UsersCountOutputTypeArgsSchema } from "../outputTypeSchemas/UsersCountOutputTypeArgsSchema"

export const UsersIncludeSchema: z.ZodType<Prisma.UsersInclude> = z.object({
  accounts: z.union([z.boolean(),z.lazy(() => AccountFindManyArgsSchema)]).optional(),
  sessions: z.union([z.boolean(),z.lazy(() => SessionFindManyArgsSchema)]).optional(),
  role: z.union([z.boolean(),z.lazy(() => RoleArgsSchema)]).optional(),
  profile: z.union([z.boolean(),z.lazy(() => ProfilesArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UsersCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default UsersIncludeSchema;
