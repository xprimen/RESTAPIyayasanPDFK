import {
  refreshToken,
  signIn,
  signInWithProvider,
  signOut,
} from "@controllers/auth";
import { zValidator } from "@hono/zod-validator";
import { AccountSchema, ProfilesSchema, UsersSchema } from "@prisma/zod";
import { Hono } from "hono";
import { bearerAuth } from "hono/bearer-auth";
import { verify } from "hono/jwt";
import { z } from "zod";
import configValidatorOutput from "../helpers/configValidatorOutput";
import { JWTSign, ProfileProviderSchema } from "../types";
import { Context } from "hono/jsx";
import { validator } from "hono/validator";
import statusMessage from "../helpers/statusMessages";

export const RefreshTokenValidator = zValidator(
  "json", // jenis request body
  z.object({
    old_token: z.string(),
  }), // validasi token lama apakah ada di request body
  configValidatorOutput // config output error message
);

export const AuthZodValidator = zValidator(
  "json",
  UsersSchema.pick({
    username: true,
    password: true,
  }),
  /* .superRefine(({ password }, checkPassComplexity) => {
      const containsUppercase = (ch: string) => /[A-Z]/.test(ch);
      const containsLowercase = (ch: string) => /[a-z]/.test(ch);
      const containsSpecialChar = (ch: string) =>
        /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/.test(ch);
      let countOfUpperCase = 0,
        countOfLowerCase = 0,
        countOfNumbers = 0,
        countOfSpecialChar = 0;

      for (let i = 0; i < password.length; i++) {
        let ch = password.charAt(i);
        if (!isNaN(+ch)) countOfNumbers++;
        else if (containsUppercase(ch)) countOfUpperCase++;
        else if (containsLowercase(ch)) countOfLowerCase++;
        else if (containsSpecialChar(ch)) countOfSpecialChar++;
      }

      let errObj = {
        upperCase: { pass: true, message: "Harus Memiliki Huruf Kapital." },
        lowerCase: { pass: true, message: "Harus Memiliki Huruf Kecil." },
        specialCh: { pass: true, message: "Harus Memiliki Karakter Khusus." },
        totalNumber: { pass: true, message: "Harus Memiliki Angka." },
      };

      if (countOfLowerCase < 1) {
        errObj = {
          ...errObj,
          lowerCase: { ...errObj.lowerCase, pass: false },
        };
      }
      if (countOfNumbers < 1) {
        errObj = {
          ...errObj,
          totalNumber: { ...errObj.totalNumber, pass: false },
        };
      }
      if (countOfUpperCase < 1) {
        errObj = {
          ...errObj,
          upperCase: { ...errObj.upperCase, pass: false },
        };
      }
      if (countOfSpecialChar < 1) {
        errObj = {
          ...errObj,
          specialCh: { ...errObj.specialCh, pass: false },
        };
      }

      if (
        countOfLowerCase < 1 ||
        countOfUpperCase < 1 ||
        countOfSpecialChar < 1 ||
        countOfNumbers < 1
      ) {
        checkPassComplexity.addIssue({
          code: "custom",
          path: ["password"],
          message: Object.entries(errObj)
            .map(([key, value]) => {
              if (value.pass) return value.message;
            })
            .join(", "),
        });
      }
    }), */
  configValidatorOutput // config output error message
);

const AuthRoutes = new Hono();

AuthRoutes.post("/signIn", AuthZodValidator, signIn)
  .post("/signOut", signOut)
  .post(
    "/signInWithProvider",
    validator("header", (value, c) => {
      // const header = value['']
      // console.log("VALUE Sing Provider :", value);
      if (!value["x-provider"] || !value["x-provider-account-id"]) {
        return c.json(
          {
            success: false,
            code: 400,
            message: statusMessage(400),
            data: "Missing Header",
          },
          400
        );
      }
      // return value;
    }),
    zValidator(
      "json",
      z.object({
        account: AccountSchema.partial().omit({
          createdAt: true,
          updatedAt: true,
        }),
        profile: ProfileProviderSchema,
        // user: UsersSchema.pick({
        //   email: true,
        //   roleId: true,
        // }),
      }),
      (res, c) => {
        if (!res.success) {
          return c.json(
            {
              success: false,
              code: 406,
              message: statusMessage(406),
              data:
                process.env.NODE_ENV === "production"
                  ? "System Error"
                  : res.error.issues.map((issue) => {
                      return {
                        field: issue.path.join("->"),
                        message: issue.message,
                      };
                    }),
            },
            406
          );
        }
        // if (!c.req.header("x-provider-type")) {
        //   return c.json(
        //     {
        //       success: false,
        //       code: 400,
        //       message: statusMessage(400),
        //       data: "X-Provider-Type not found",
        //     },
        //     400
        //   );
        // }
      }
    ),
    signInWithProvider
  )
  // .post("/auth/register", AuthZodValidator, register)
  .use(
    "/refresh-token",
    bearerAuth({
      verifyToken: async (token, c) => {
        const verifToken = (await verify(
          token,
          process.env.JWT_REFRESH
        )) as JWTSign;
        if (typeof verifToken === "object") {
          return true;
        } else {
          return false;
        }
      },
    })
  )
  .post("/refresh-token", RefreshTokenValidator, refreshToken);

export default AuthRoutes;
