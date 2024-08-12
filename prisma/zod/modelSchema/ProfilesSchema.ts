import { z } from 'zod';
import type { UsersWithRelations } from './UsersSchema'
import { UsersWithRelationsSchema } from './UsersSchema'

/////////////////////////////////////////
// PROFILES SCHEMA
/////////////////////////////////////////

export const ProfilesSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  bio: z.string().nullable(),
  userId: z.string(),
})

export type Profiles = z.infer<typeof ProfilesSchema>

/////////////////////////////////////////
// PROFILES RELATION SCHEMA
/////////////////////////////////////////

export type ProfilesRelations = {
  user: UsersWithRelations;
};

export type ProfilesWithRelations = z.infer<typeof ProfilesSchema> & ProfilesRelations

export const ProfilesWithRelationsSchema: z.ZodType<ProfilesWithRelations> = ProfilesSchema.merge(z.object({
  user: z.lazy(() => UsersWithRelationsSchema),
}))

export default ProfilesSchema;
