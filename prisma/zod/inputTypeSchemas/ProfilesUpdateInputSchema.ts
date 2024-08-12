import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { UsersUpdateOneRequiredWithoutProfileNestedInputSchema } from './UsersUpdateOneRequiredWithoutProfileNestedInputSchema';

export const ProfilesUpdateInputSchema: z.ZodType<Prisma.ProfilesUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user: z.lazy(() => UsersUpdateOneRequiredWithoutProfileNestedInputSchema).optional()
}).strict();

export default ProfilesUpdateInputSchema;
