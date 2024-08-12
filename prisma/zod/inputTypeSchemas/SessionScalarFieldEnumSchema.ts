import { z } from 'zod';

export const SessionScalarFieldEnumSchema = z.enum(['id','sessionToken','refreshToken','device','userId','expires','logout','createdAt','updatedAt']);

export default SessionScalarFieldEnumSchema;
