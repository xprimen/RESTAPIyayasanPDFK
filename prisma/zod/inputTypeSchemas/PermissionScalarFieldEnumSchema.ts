import { z } from 'zod';

export const PermissionScalarFieldEnumSchema = z.enum(['id','name','description','createdAt','updatedAt','deletedAt']);

export default PermissionScalarFieldEnumSchema;
