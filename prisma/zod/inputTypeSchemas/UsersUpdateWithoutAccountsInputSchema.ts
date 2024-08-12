import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { SessionUpdateManyWithoutUserNestedInputSchema } from './SessionUpdateManyWithoutUserNestedInputSchema';
import { RoleUpdateOneRequiredWithoutUsersNestedInputSchema } from './RoleUpdateOneRequiredWithoutUsersNestedInputSchema';
import { ProfilesUpdateOneWithoutUserNestedInputSchema } from './ProfilesUpdateOneWithoutUserNestedInputSchema';

export const UsersUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UsersUpdateWithoutAccountsInput> = z.object({
  id: z.union([ z.string().min(3,{message:"Minimal 3 Karakter"}).max(20,{message:"Maksimal 20 Karakter"}),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string().min(3,{message:"Minimal 3 Karakter"}).max(20,{message:"Maksimal 20 Karakter"}),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string().min(5,{message:"Minimal 5 Karakter"}),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string().email({message:"Email Tidak Valid"}),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  role: z.lazy(() => RoleUpdateOneRequiredWithoutUsersNestedInputSchema).optional(),
  profile: z.lazy(() => ProfilesUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export default UsersUpdateWithoutAccountsInputSchema;
