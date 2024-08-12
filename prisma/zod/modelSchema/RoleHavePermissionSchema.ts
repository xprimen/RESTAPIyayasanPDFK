import { z } from 'zod';
import type { RoleWithRelations } from './RoleSchema'
import type { PermissionWithRelations } from './PermissionSchema'
import { RoleWithRelationsSchema } from './RoleSchema'
import { PermissionWithRelationsSchema } from './PermissionSchema'

/////////////////////////////////////////
// ROLE HAVE PERMISSION SCHEMA
/////////////////////////////////////////

export const RoleHavePermissionSchema = z.object({
  roleId: z.number().int(),
  permissionId: z.number().int(),
})

export type RoleHavePermission = z.infer<typeof RoleHavePermissionSchema>

/////////////////////////////////////////
// ROLE HAVE PERMISSION RELATION SCHEMA
/////////////////////////////////////////

export type RoleHavePermissionRelations = {
  role: RoleWithRelations;
  permission: PermissionWithRelations;
};

export type RoleHavePermissionWithRelations = z.infer<typeof RoleHavePermissionSchema> & RoleHavePermissionRelations

export const RoleHavePermissionWithRelationsSchema: z.ZodType<RoleHavePermissionWithRelations> = RoleHavePermissionSchema.merge(z.object({
  role: z.lazy(() => RoleWithRelationsSchema),
  permission: z.lazy(() => PermissionWithRelationsSchema),
}))

export default RoleHavePermissionSchema;
