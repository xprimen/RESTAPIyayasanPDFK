import { z } from 'zod';
import type { RoleHavePermissionWithRelations } from './RoleHavePermissionSchema'
import { RoleHavePermissionWithRelationsSchema } from './RoleHavePermissionSchema'

/////////////////////////////////////////
// PERMISSION SCHEMA
/////////////////////////////////////////

export const PermissionSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
})

export type Permission = z.infer<typeof PermissionSchema>

/////////////////////////////////////////
// PERMISSION RELATION SCHEMA
/////////////////////////////////////////

export type PermissionRelations = {
  roles: RoleHavePermissionWithRelations[];
};

export type PermissionWithRelations = z.infer<typeof PermissionSchema> & PermissionRelations

export const PermissionWithRelationsSchema: z.ZodType<PermissionWithRelations> = PermissionSchema.merge(z.object({
  roles: z.lazy(() => RoleHavePermissionWithRelationsSchema).array(),
}))

export default PermissionSchema;
