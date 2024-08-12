import { z } from 'zod';
import type { RoleHavePermissionWithRelations } from './RoleHavePermissionSchema'
import type { UsersWithRelations } from './UsersSchema'
import { RoleHavePermissionWithRelationsSchema } from './RoleHavePermissionSchema'
import { UsersWithRelationsSchema } from './UsersSchema'

/////////////////////////////////////////
// ROLE SCHEMA
/////////////////////////////////////////

export const RoleSchema = z.object({
  id: z.number().int(),
  rolekey: z.string(),
  rolename: z.string(),
})

export type Role = z.infer<typeof RoleSchema>

/////////////////////////////////////////
// ROLE RELATION SCHEMA
/////////////////////////////////////////

export type RoleRelations = {
  permissions: RoleHavePermissionWithRelations[];
  users: UsersWithRelations[];
};

export type RoleWithRelations = z.infer<typeof RoleSchema> & RoleRelations

export const RoleWithRelationsSchema: z.ZodType<RoleWithRelations> = RoleSchema.merge(z.object({
  permissions: z.lazy(() => RoleHavePermissionWithRelationsSchema).array(),
  users: z.lazy(() => UsersWithRelationsSchema).array(),
}))

export default RoleSchema;
