import { createRoute } from "@hono/zod-openapi";
import { UsersSchema } from "@prisma/zod";
import { AuthZodValidator } from "@routes/authRoutes";
import { z } from "zod";
import { OSignIn, XPResponse } from "../types";
import { Context } from "hono";
import statusMessage from "../helpers/statusMessages";

export const docSignIn = createRoute({
  method: "post",
  // servers: [{ url: "http://localhost:3000" }],
  path: "/auth/signIn",
  tags: ["Otentifikasi"],
  middlewares: AuthZodValidator,
  request: {
    body: {
      content: {
        "application/json": {
          schema: UsersSchema.pick({ username: true, password: true }).openapi({
            required: ["username", "password"],
            default: {
              username: "username",
              password: "password",
            },
          }),
        },
      },
    },
  },
  responses: {
    200: {
      description: statusMessage(200),
      content: {
        "application/json": {
          schema: XPResponse(OSignIn),
        },
      },
    },
    400: {
      description: statusMessage(400),
      content: {
        "application/json": {
          schema: XPResponse(
            z.array(
              z.object({
                field: z.string(),
                message: z.string(),
              })
            )
          ).default({
            success: false,
            code: 400,
            message: statusMessage(400),
            data: [
              {
                field: "fieldname",
                message: "message",
              },
            ],
          }),
        },
      },
    },
    404: {
      description: statusMessage(404),
      content: {
        "application/json": {
          schema: XPResponse(z.null())
            .omit({ data: true })
            .default({
              success: false,
              code: 404,
              message: statusMessage(404),
            }),
        },
      },
    },
    500: {
      description: statusMessage(500),
      content: {
        "application/json": {
          schema: XPResponse(z.null())
            .omit({ data: true })
            .default({
              success: false,
              code: 500,
              message: statusMessage(500),
            }),
        },
      },
    },
  },
});

export const docSignInResponse = (c: Context) => {
  try {
    return c.json(
      {
        success: true,
        code: 200,
        message: "OK",
        data: {
          id: "id",
          token: "token",
          refresh_token: "refresh_token",
          username: "username",
          name: "name",
          email: "email",
          active: true,
          rolekey: "string",
          rolename: "string",
        },
      },
      200
    );
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return c.json(
        {
          success: false,
          code: 500,
          message: error.message,
        },
        500
      );
    }
    return c.json(
      {
        success: false,
        code: 500,
        message: "Error",
      },
      500
    );
  }
};

export default {
  docSignIn,
  docSignInResponse,
};
