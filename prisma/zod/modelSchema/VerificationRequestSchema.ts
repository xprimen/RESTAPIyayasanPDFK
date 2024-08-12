import { z } from 'zod';

/////////////////////////////////////////
// VERIFICATION REQUEST SCHEMA
/////////////////////////////////////////

export const VerificationRequestSchema = z.object({
  id: z.number().int(),
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type VerificationRequest = z.infer<typeof VerificationRequestSchema>

export default VerificationRequestSchema;
