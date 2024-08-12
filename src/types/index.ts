import { ProfilesSchema, RoleSchema, UsersSchema } from "@prisma/zod";
import { JWTPayload } from "hono/utils/jwt/types";
import { ZodType, z } from "zod";

// declare module 'bun';
declare module "bun" {
  interface Env {
    DATBASE_ENGINE: string;
    DATABASE_URL: string;
    JWT_KEY: string;
    JWT_REFRESH: string;
    JWT_EXP: number;
    JWT_EXP_REFRESH: number;
  }
}

// Object SignIn Type
export const OSignIn = z
  .object({
    // ip: z.string().ip(),
    id: z.string(),
    token: z.string(),
    refresh_token: z.string(),
    username: z.string(),
    name: z.string(),
    email: z.string().nullable(),
    active: z.boolean(),
    role: z.string(),
    rolename: z.string(),
  })
  .strict();

export type TOSignIn = z.infer<typeof OSignIn>;

// Response callback
export function XPResponse<T extends z.ZodTypeAny | z.ZodTypeAny>(
  OSignInSchema: T
) {
  return z.object({
    success: z.boolean(),
    message: z.string().default("OK"),
    code: z.number().default(200),
    data: OSignInSchema.optional(),
  });
}

type XPResponseType<T extends z.ZodTypeAny> = ReturnType<typeof XPResponse<T>>;

export type TXPResponse<T> = z.infer<XPResponseType<ZodType<T>>>;

// Userdata Type
export const Userdata = UsersSchema.pick({
  id: true,
  username: true,
  image: true,
  active: true,
  email: true,
  createdAt: true,
}).merge(
  z.object({
    role: RoleSchema.pick({
      rolename: true,
      rolekey: true,
    }),
    profile: ProfilesSchema.pick({
      name: true,
      bio: true,
    }).nullable(),
  })
);

export type TUserdata = z.infer<typeof Userdata>;

export const ProfileProviderSchema = z.object({
  iss: z.string(),
  azp: z.string(),
  aud: z.string(),
  sub: z.string(),
  email: z.string().email(),
  email_verified: z.boolean(),
  at_hash: z.string(),
  iat: z.number(),
  exp: z.number(),
});

export type TProfileProvider = z.infer<typeof ProfileProviderSchema>;

// JWT Sign Type
export type JWTSign = JWTPayload & {
  username: string;
  sub: string;
  role: string;
};

export interface Profile {
  sub?: string;
  name?: string;
  email?: string;
  image?: string;
  iss?: string;
  azp?: string;
  aud?: string;
  email_verified?: boolean;
  at_hash?: string;
  iat?: number;
  exp?: number;
  bio?: string;
}

export interface Account {
  providerAccountId: string;
  /** id of the user this account belongs to. */
  userId?: string;
  /** id of the provider used for this account */
  provider: string;
  /** Provider's type for this account */
  type: "email" | "credentials" | "oauth";
  access_token?: string;
  refresh_token?: string;
  expires_at?: number;
  scope?: string;
  token_type?: string;
  id_token?: string;
}

export interface ReturnLoginProvider {
  id: string;
  username: string;
  email: string;
  active: boolean;
  name: string;
  bio: string;
  image: string;
  token: string;
  refresh_token: string;
  role: string;
}
