import { z } from 'zod';

export const RoleHavePermissionScalarFieldEnumSchema = z.enum(['roleId','permissionId']);

export default RoleHavePermissionScalarFieldEnumSchema;
