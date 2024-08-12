import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AccountCreateNestedManyWithoutUserInputSchema } from './AccountCreateNestedManyWithoutUserInputSchema';
import { SessionCreateNestedManyWithoutUserInputSchema } from './SessionCreateNestedManyWithoutUserInputSchema';
import { RoleCreateNestedOneWithoutUsersInputSchema } from './RoleCreateNestedOneWithoutUsersInputSchema';
import { ProfilesCreateNestedOneWithoutUserInputSchema } from './ProfilesCreateNestedOneWithoutUserInputSchema';

export const UsersCreateInputSchema: z.ZodType<Prisma.UsersCreateInput> = z.object({
  id: z.string().min(3,{message:"Minimal 3 Karakter"}).max(20,{message:"Maksimal 20 Karakter"}).optional(),
  username: z.string().min(3,{message:"Minimal 3 Karakter"}).max(20,{message:"Maksimal 20 Karakter"}),
  password: z.string().min(5,{message:"Minimal 5 Karakter"}),
  email: z.string().email({message:"Email Tidak Valid"}).optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  active: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  role: z.lazy(() => RoleCreateNestedOneWithoutUsersInputSchema),
  profile: z.lazy(() => ProfilesCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export default UsersCreateInputSchema;
