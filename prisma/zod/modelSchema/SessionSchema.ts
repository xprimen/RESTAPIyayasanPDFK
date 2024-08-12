import { z } from 'zod';
import type { UsersWithRelations } from './UsersSchema'
import { UsersWithRelationsSchema } from './UsersSchema'

/////////////////////////////////////////
// SESSION SCHEMA
/////////////////////////////////////////

export const SessionSchema = z.object({
  id: z.number().int(),
  sessionToken: z.string(),
  refreshToken: z.string(),
  device: z.string(),
  userId: z.string(),
  expires: z.coerce.date(),
  logout: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Session = z.infer<typeof SessionSchema>

/////////////////////////////////////////
// SESSION RELATION SCHEMA
/////////////////////////////////////////

export type SessionRelations = {
  user: UsersWithRelations;
};

export type SessionWithRelations = z.infer<typeof SessionSchema> & SessionRelations

export const SessionWithRelationsSchema: z.ZodType<SessionWithRelations> = SessionSchema.merge(z.object({
  user: z.lazy(() => UsersWithRelationsSchema),
}))

export default SessionSchema;
