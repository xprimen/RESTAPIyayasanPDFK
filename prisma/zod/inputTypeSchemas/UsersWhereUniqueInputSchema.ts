import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UsersWhereInputSchema } from './UsersWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { AccountListRelationFilterSchema } from './AccountListRelationFilterSchema';
import { SessionListRelationFilterSchema } from './SessionListRelationFilterSchema';
import { RoleRelationFilterSchema } from './RoleRelationFilterSchema';
import { RoleWhereInputSchema } from './RoleWhereInputSchema';
import { ProfilesNullableRelationFilterSchema } from './ProfilesNullableRelationFilterSchema';
import { ProfilesWhereInputSchema } from './ProfilesWhereInputSchema';

export const UsersWhereUniqueInputSchema: z.ZodType<Prisma.UsersWhereUniqueInput> = z.union([
  z.object({
    id: z.string().min(3,{message:"Minimal 3 Karakter"}).max(20,{message:"Maksimal 20 Karakter"}),
    username: z.string().min(3,{message:"Minimal 3 Karakter"}).max(20,{message:"Maksimal 20 Karakter"}),
    email: z.string().email({message:"Email Tidak Valid"})
  }),
  z.object({
    id: z.string().min(3,{message:"Minimal 3 Karakter"}).max(20,{message:"Maksimal 20 Karakter"}),
    username: z.string().min(3,{message:"Minimal 3 Karakter"}).max(20,{message:"Maksimal 20 Karakter"}),
  }),
  z.object({
    id: z.string().min(3,{message:"Minimal 3 Karakter"}).max(20,{message:"Maksimal 20 Karakter"}),
    email: z.string().email({message:"Email Tidak Valid"}),
  }),
  z.object({
    id: z.string().min(3,{message:"Minimal 3 Karakter"}).max(20,{message:"Maksimal 20 Karakter"}),
  }),
  z.object({
    username: z.string().min(3,{message:"Minimal 3 Karakter"}).max(20,{message:"Maksimal 20 Karakter"}),
    email: z.string().email({message:"Email Tidak Valid"}),
  }),
  z.object({
    username: z.string().min(3,{message:"Minimal 3 Karakter"}).max(20,{message:"Maksimal 20 Karakter"}),
  }),
  z.object({
    email: z.string().email({message:"Email Tidak Valid"}),
  }),
])
.and(z.object({
  id: z.string().min(3,{message:"Minimal 3 Karakter"}).max(20,{message:"Maksimal 20 Karakter"}).optional(),
  username: z.string().min(3,{message:"Minimal 3 Karakter"}).max(20,{message:"Maksimal 20 Karakter"}).optional(),
  email: z.string().email({message:"Email Tidak Valid"}).optional(),
  AND: z.union([ z.lazy(() => UsersWhereInputSchema),z.lazy(() => UsersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UsersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UsersWhereInputSchema),z.lazy(() => UsersWhereInputSchema).array() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string().min(5,{message:"Minimal 5 Karakter"}) ]).optional(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  roleId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  active: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
  sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
  role: z.union([ z.lazy(() => RoleRelationFilterSchema),z.lazy(() => RoleWhereInputSchema) ]).optional(),
  profile: z.union([ z.lazy(() => ProfilesNullableRelationFilterSchema),z.lazy(() => ProfilesWhereInputSchema) ]).optional().nullable(),
}).strict());

export default UsersWhereUniqueInputSchema;
