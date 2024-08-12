import prisma from "@prisma/index";
import { Context } from "hono";
import statusMessage from "../helpers/statusMessages";
import { TUserdata } from "../types";
import { Users, UsersRelations, UsersWithRelations } from "@prisma/zod";

export const getAllUsers = async (c: Context) => {
  try {
    // const device = UAParser(c.req.header("user-agent"));
    const users: TUserdata[] = await prisma.users.findMany({
      take: 10,
      where: {
        active: true,
      },
      select: {
        id: true,
        username: true,
        image: true,
        active: true,
        email: true,
        createdAt: true,
        profile: {
          select: {
            name: true,
            bio: true,
          },
        },
        role: {
          select: {
            rolename: true,
            rolekey: true,
          },
        },
      },
    });
    return c.json(
      {
        status: true,
        code: 200,
        message: statusMessage(200),
        data: users,
      },
      200
    );
  } catch (error) {
    return c.json(
      {
        status: false,
        code: 500,
        message: statusMessage(500),
      },
      500
    );
  }
};

export const getUser = async (c: Context) => {
  try {
    const id = await c.req.param("id");
    // const device = UAParser(c.req.header("user-agent"));
    const user = await prisma.users.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        username: true,
        image: true,
        active: true,
        email: true,
        createdAt: true,
        profile: {
          select: {
            name: true,
            bio: true,
          },
        },
        role: {
          select: {
            rolename: true,
            rolekey: true,
          },
        },
        accounts: {
          select: {
            provider: true,
            providerAccountId: true,
            type: true,
            access_token: true,
            refresh_token: true,
            expires_at: true,
          },
        },
      },
    });
    return c.json(
      {
        status: true,
        code: 200,
        message: statusMessage(200),
        data: user,
      },
      200
    );
  } catch (error) {
    return c.json(
      {
        status: true,
        code: 404,
        message: statusMessage(404),
      },
      404
    );
  }
};

export const createUser = async (c: Context) => {
  try {
    const { body } = c;
    return c.text("asdasd");
  } catch (err) {
    console.log(err);
  }
};
