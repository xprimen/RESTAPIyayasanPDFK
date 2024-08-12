import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VerificationRequestCreateManyInputSchema } from '../inputTypeSchemas/VerificationRequestCreateManyInputSchema'

export const VerificationRequestCreateManyAndReturnArgsSchema: z.ZodType<Prisma.VerificationRequestCreateManyAndReturnArgs> = z.object({
  data: z.union([ VerificationRequestCreateManyInputSchema,VerificationRequestCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default VerificationRequestCreateManyAndReturnArgsSchema;
