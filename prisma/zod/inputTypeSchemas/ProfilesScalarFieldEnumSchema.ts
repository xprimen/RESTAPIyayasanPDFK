import { z } from 'zod';

export const ProfilesScalarFieldEnumSchema = z.enum(['id','name','bio','userId']);

export default ProfilesScalarFieldEnumSchema;
