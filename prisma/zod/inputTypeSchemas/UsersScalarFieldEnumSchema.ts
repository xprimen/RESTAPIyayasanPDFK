import { z } from 'zod';

export const UsersScalarFieldEnumSchema = z.enum(['id','username','password','email','emailVerified','image','roleId','active','createdAt','updatedAt','deletedAt']);

export default UsersScalarFieldEnumSchema;
