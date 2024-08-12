import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VerificationRequestIdentifierTokenCompoundUniqueInputSchema } from './VerificationRequestIdentifierTokenCompoundUniqueInputSchema';
import { VerificationRequestWhereInputSchema } from './VerificationRequestWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const VerificationRequestWhereUniqueInputSchema: z.ZodType<Prisma.VerificationRequestWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    token: z.string(),
    identifier_token: z.lazy(() => VerificationRequestIdentifierTokenCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.number().int(),
    token: z.string(),
  }),
  z.object({
    id: z.number().int(),
    identifier_token: z.lazy(() => VerificationRequestIdentifierTokenCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    token: z.string(),
    identifier_token: z.lazy(() => VerificationRequestIdentifierTokenCompoundUniqueInputSchema),
  }),
  z.object({
    token: z.string(),
  }),
  z.object({
    identifier_token: z.lazy(() => VerificationRequestIdentifierTokenCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  token: z.string().optional(),
  identifier_token: z.lazy(() => VerificationRequestIdentifierTokenCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => VerificationRequestWhereInputSchema),z.lazy(() => VerificationRequestWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationRequestWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationRequestWhereInputSchema),z.lazy(() => VerificationRequestWhereInputSchema).array() ]).optional(),
  identifier: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export default VerificationRequestWhereUniqueInputSchema;
