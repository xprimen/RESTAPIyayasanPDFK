import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UsersCreateNestedOneWithoutAccountsInputSchema } from './UsersCreateNestedOneWithoutAccountsInputSchema';

export const AccountCreateInputSchema: z.ZodType<Prisma.AccountCreateInput> = z.object({
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UsersCreateNestedOneWithoutAccountsInputSchema).optional()
}).strict();

export default AccountCreateInputSchema;
