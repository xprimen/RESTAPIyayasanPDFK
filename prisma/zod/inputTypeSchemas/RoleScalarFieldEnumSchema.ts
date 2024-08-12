import { z } from 'zod';

export const RoleScalarFieldEnumSchema = z.enum(['id','rolekey','rolename']);

export default RoleScalarFieldEnumSchema;
