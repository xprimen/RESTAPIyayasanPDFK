import { z } from 'zod';
import type { AccountWithRelations } from './AccountSchema'
import type { SessionWithRelations } from './SessionSchema'
import type { RoleWithRelations } from './RoleSchema'
import type { ProfilesWithRelations } from './ProfilesSchema'
import { AccountWithRelationsSchema } from './AccountSchema'
import { SessionWithRelationsSchema } from './SessionSchema'
import { RoleWithRelationsSchema } from './RoleSchema'
import { ProfilesWithRelationsSchema } from './ProfilesSchema'

/////////////////////////////////////////
// USERS SCHEMA
/////////////////////////////////////////

export const UsersSchema = z.object({
  id: z.string().min(3,{message:"Minimal 3 Karakter"}).max(20,{message:"Maksimal 20 Karakter"}),
  username: z.string().min(3,{message:"Minimal 3 Karakter"}).max(20,{message:"Maksimal 20 Karakter"}),
  password: z.string().min(5,{message:"Minimal 5 Karakter"}),
  email: z.string().email({message:"Email Tidak Valid"}).nullable(),
  emailVerified: z.coerce.date().nullable(),
  image: z.string().nullable(),
  roleId: z.number().int(),
  active: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
})

export type Users = z.infer<typeof UsersSchema>

/////////////////////////////////////////
// USERS RELATION SCHEMA
/////////////////////////////////////////

export type UsersRelations = {
  accounts: AccountWithRelations[];
  sessions: SessionWithRelations[];
  role: RoleWithRelations;
  profile?: ProfilesWithRelations | null;
};

export type UsersWithRelations = z.infer<typeof UsersSchema> & UsersRelations

export const UsersWithRelationsSchema: z.ZodType<UsersWithRelations> = UsersSchema.merge(z.object({
  accounts: z.lazy(() => AccountWithRelationsSchema).array(),
  sessions: z.lazy(() => SessionWithRelationsSchema).array(),
  role: z.lazy(() => RoleWithRelationsSchema),
  profile: z.lazy(() => ProfilesWithRelationsSchema).nullable(),
}))

export default UsersSchema;
