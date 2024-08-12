import prisma from "@prisma/index";
import { Users, UsersWithRelations } from "@prisma/zod";
import bcrypt, { compareSync, genSaltSync, hashSync } from "bcryptjs";
import { Context, Next, TypedResponse } from "hono";
import { decode, sign, verify } from "hono/jwt";
import moment from "moment";
import { UAParser } from "ua-parser-js";
import statusMessage from "../helpers/statusMessages";
import {
  Account,
  JWTSign,
  Profile,
  ReturnLoginProvider,
  TOSignIn,
  TXPResponse,
} from "../types";
import { JWTPayload } from "hono/utils/jwt/types";

export const signOut = async (
  c: Context,
  next: Next
): Promise<TypedResponse> => {
  try {
    // const token = c.req.header("Authorization")?.split(" ")[1]!;
    // const { payload } = decode(token) as {
    //   header: { alg: string; typ: string };
    //   payload: JWTSign;
    // }; // mengambil payload refresh token lama
    const { id, token } = await c.req.json();

    const updateSession = await prisma.session.update({
      data: {
        logout: moment().format(),
      },
      where: {
        sessionToken: token,
        userId_device: {
          userId: String(id),
          device: UAParser(c.req.header("user-agent")).device.type || "browser",
        },
      },
    });

    if (updateSession) {
      return c.json({
        success: true,
        code: 200,
        message: statusMessage(200),
      });
    }
    return c.json({
      success: false,
      code: 500,
      message: statusMessage(500),
    });
  } catch (err) {
    const error = String(err).split(":")[0];
    console.log(error);
    return c.json({
      success: false,
      code: 401,
      message: statusMessage(401),
    });
  }
};

export const refreshToken = async (c: Context) =>
  // : Promise<
  //   TypedResponse<TXPResponse<{ token: string; refresh_token: string }>>
  // >
  {
    try {
      const getOldRefreshToken = c.req.header("Authorization")?.split(" ")[1]!; // mengambil payload refresh token lama dari request header
      const verfiedOldRefreshToken = await verify(
        getOldRefreshToken,
        process.env.JWT_REFRESH!
      );
      if (!verfiedOldRefreshToken) {
        return c.json(
          {
            success: false,
            code: 401,
            message: "refresh token basi",
          },
          401
        );
      }
      const { payload: oldRefreshToken } = decode(getOldRefreshToken) as {
        header: { alg: string; typ: string };
        payload: JWTSign;
      }; // mengambil payload refresh token lama
      if (!oldRefreshToken) {
        console.log("oldRefreshToken EXPIRED");
      }
      const { old_token } = await c.req.json(); // mengambil token lama yg sudah expired dari body

      // cek session from old token
      const session = await prisma.session.findUnique({
        where: {
          sessionToken: old_token,
          userId_device: {
            userId: oldRefreshToken.sub,
            device:
              UAParser(c.req.header("user-agent")).device.type || "browser",
          },
        },
      });

      if (!session) {
        //tampilkan error 401 jika session tidak ada di tabel session
        return c.json(
          {
            success: false,
            code: 401,
            message: statusMessage(401),
          },
          401
        );
      }

      const expireToken = moment().add(process.env.JWT_EXP, "s").format(); // tanggal expired token baru bentuk DATETIME

      const iat = Number(moment().format("X")); // tanggal dan jam token baru bentuk timestamp
      const exp = iat + Number(process.env.JWT_EXP); // tanggal dan jam expired token baru bentuk timestamp
      const expRefresh = exp + Number(process.env.JWT_EXP_REFRESH); // tanggal dan jam expired refresh token baru bentuk timestamp

      const dataToSign: JWTSign = {
        // object data token baru
        username: oldRefreshToken.username,
        sub: oldRefreshToken.sub,
        role: oldRefreshToken.role,
        iat,
        exp,
      };
      const dataToSignRefresh: JWTSign = {
        // object data refresh token baru
        username: oldRefreshToken.username,
        sub: oldRefreshToken.sub,
        role: oldRefreshToken.role,
        iat,
        exp: expRefresh,
      };
      const token = await sign(dataToSign, process.env.JWT_KEY!); // generate token baru
      const refresh_token = await sign(
        dataToSignRefresh,
        process.env.JWT_REFRESH!
      ); // generate refresh token baru

      // console.log("UPDATE SESSION : ", {
      //   token,
      //   refreshToken,
      //   old_token,
      //   oldRefreshToken,
      //   id: oldRefreshToken.sub,
      //   device: UAParser(c.req.header("user-agent")).device.type || "browser",
      // });

      // update session dengan token2 yang baru
      const updateSession = await prisma.session.update({
        data: {
          sessionToken: token,
          refreshToken: refresh_token,
          expires: expireToken,
        },
        where: {
          sessionToken: old_token,
          userId_device: {
            userId: oldRefreshToken.sub,
            device:
              UAParser(c.req.header("user-agent")).device.type || "browser",
          },
        },
      });

      if (!updateSession) {
        console.log("UPDATE SESSION FAILED");
        return c.json({
          success: false,
          code: 500,
          message: statusMessage(500),
        });
      }

      return c.json({
        success: true,
        code: 200,
        message: statusMessage(200),
        data: {
          token: token,
          refresh_token: refresh_token,
        },
      });
    } catch (err) {
      console.log("REFRESH TOKEN ERROR", JSON.stringify(err));
      return c.json(
        {
          success: false,
          code: 401,
          message: JSON.stringify(err),
        },
        401
      );
    }
  };

export const signIn = async (
  c: Context
): Promise<TypedResponse<TXPResponse<TOSignIn>>> => {
  try {
    const { username, password }: Pick<Users, "username" | "password"> =
      await c.req.json();
    const device =
      UAParser(c.req.header("user-agent")).device.type || "browser";

    const userdata = (await prisma.users.findUnique({
      where: {
        username,
      },
      include: {
        role: {
          select: {
            rolename: true,
            rolekey: true,
          },
        },
        profile: {
          select: {
            name: true,
          },
        },
      },
    })) as UsersWithRelations;

    if (!userdata) {
      return c.json(
        {
          success: false,
          code: 404,
          // message: "User Tidak Ditemukan",
          message: "Cek Kembali Data Login Anda",
        },
        404
      );
    }
    // console.log(userdata);

    const compare = await bcrypt.compare(password, userdata.password);
    if (!compare) {
      return c.json(
        {
          success: false,
          code: 401,
          message: "Cek Kembali Data Login Anda",
        },
        401
      );
    }

    const expireToken = moment().add(process.env.JWT_EXP, "s").format();
    // console.log("Expire token :", expireToken);

    const iat = Number(moment().format("X"));
    const nbf = iat;
    const exp = iat + Number(process.env.JWT_EXP);
    const expRefresh = exp + Number(process.env.JWT_EXP_REFRESH);

    const dataToSign: JWTSign = {
      username,
      sub: userdata.id,
      role: userdata.role.rolekey,
      iat,
      nbf,
      exp,
    };
    const dataToSignRefresh: JWTSign = {
      username,
      sub: userdata.id,
      role: userdata.role.rolekey,
      iat,
      nbf,
      exp: expRefresh,
    };
    const token = await sign(dataToSign, process.env.JWT_KEY!);
    const refresh_token = await sign(
      dataToSignRefresh,
      process.env.JWT_REFRESH!
    );

    // console.log("token :", token);

    // save to session table
    await prisma.session.upsert({
      where: {
        userId_device: {
          userId: String(userdata.id),
          device: device,
        },
      },
      update: {
        sessionToken: token,
        expires: expireToken,
        refreshToken: refresh_token,
        logout: null,
      },
      create: {
        sessionToken: token,
        device: device,
        refreshToken: refresh_token,
        userId: userdata.id,
        expires: expireToken,
      },
    });

    const ret = {
      id: userdata.id,
      token,
      refresh_token,
      username,
      name: userdata.profile!.name,
      email: userdata.email,
      active: userdata.active,
      role: userdata.role.rolekey,
      rolename: userdata.role.rolename,
    };
    return c.json(
      {
        success: true,
        code: 200,
        message: "OK",
        data: ret,
      },
      200
    );
  } catch (err) {
    return c.json(
      {
        success: false,
        code: 500,
        message: JSON.stringify(err),
      },
      500
    );
  }
};

export const signInWithProvider = async (c: Context) => {
  // try {
  // let dataToSign: JWTSign;
  // let token: string;
  // declare return
  let ret: ReturnLoginProvider;
  const { account, profile }: { account: Account; profile: Profile } =
    await c.req.json();
  const device = UAParser(c.req.header("user-agent")).device.type || "browser";
  // console.log("BODY : ", body);
  // check user apakah sudah ada
  const checkUser = await prisma.users
    .findUnique({
      where: {
        email: profile.email!,
        active: true,
      },
      include: {
        role: true,
        profile: true,
      },
    })
    .catch((err) => {
      console.log("Catch ERROR Check User :", err);
    });

  const expireToken = moment().add(process.env.JWT_EXP, "s").format();

  const iat = Number(moment().format("X"));
  const nbf = iat;
  const exp = iat + Number(process.env.JWT_EXP);
  const expRefresh = exp + Number(process.env.JWT_EXP_REFRESH);

  if (!checkUser) {
    // jika user belum terdaftar
    const username = "user_" + crypto.randomUUID().split("-")[0];
    const password = hashSync("oraonoopoopo", genSaltSync(10));

    const createUser = await prisma.users.create({
      data: {
        username,
        password,
        email: profile.email,
        emailVerified: moment().format(),
        roleId: 2, // user
        active: true,
        image: profile.image,
      },
      include: {
        role: true,
      },
    });

    if (createUser) {
      const dataToSign: JWTSign = {
        username,
        sub: createUser?.id,
        role: createUser.role.rolekey,
        iat,
        nbf,
        exp,
      };

      // buat JWT token
      const token: string = await sign(dataToSign, process.env.JWT_KEY!);

      // buat profile baru
      const createProfile = await prisma.profiles.create({
        data: {
          name: profile.name!,
          userId: createUser.id,
        },
      });

      // buat account baru
      const createAccount = await prisma.account.create({
        data: {
          ...account,
          userId: createUser.id,
        },
      });

      // buat session baru
      const createSession = await prisma.session.create({
        data: {
          device,
          sessionToken: token,
          refreshToken: "",
          expires: expireToken,
          userId: createUser.id,
        },
      });

      // hasil return
      if (createProfile && createAccount && createSession) {
        return c.json(
          {
            success: true,
            code: 200,
            message: statusMessage(200),
            data: {
              id: createUser.id,
              username: createUser.username,
              email: createUser.email!,
              active: createUser.active,
              name: createProfile.name,
              bio: createProfile.bio || "",
              image: createUser.image || "",
              token,
              refresh_token: "",
              role: createUser.role.rolekey,
            },
          },
          200
        );
      } else {
        return c.json(
          {
            success: false,
            code: 422,
            message: statusMessage(422),
          },
          422
        );
      }
    }
  } else {
    // buat data to sign to JWT
    const dataToSign: JWTSign = {
      username: checkUser.username,
      sub: checkUser?.id,
      role: checkUser.role.rolekey,
      iat,
      nbf,
      // exp,
    };
    /* const dataToSignRefresh: JWTSign = {
      username: checkUser.username,
      sub: checkUser.id,
      role: checkUser.role.rolekey,
      iat,
      nbf,
      // exp: expRefresh,
    }; */

    // buat JWT token
    const token: string = await sign(
      { ...dataToSign, exp },
      process.env.JWT_KEY!
    );
    const refresh_token = await sign(
      { ...dataToSign, exp: expRefresh },
      process.env.JWT_REFRESH!
    );

    // console.log("CHECKUSER :", {
    //   token,
    //   refresh_token,
    //   expireToken,
    //   userId: checkUser.id,
    //   device,
    // });

    const updateSession = await prisma.session.upsert({
      where: {
        userId_device: {
          userId: String(checkUser.id),
          device: device,
        },
      },
      create: {
        sessionToken: token,
        refreshToken: refresh_token,
        expires: expireToken,
        logout: null,
        userId: String(checkUser.id),
        device: device,
      },
      update: {
        sessionToken: token,
        refreshToken: refresh_token,
        expires: expireToken,
        logout: null,
      },
    });

    // jika session gagal dibuat
    if (!updateSession) {
      return c.json(
        {
          success: false,
          code: 422,
          message: statusMessage(422),
        },
        422
      );
    }

    if (checkUser.role.rolekey !== "admin") {
      // update Account jika bukan admin
      const updateAccount = await prisma.account
        .update({
          where: {
            provider_providerAccountId: {
              provider: account.provider,
              providerAccountId: account.providerAccountId,
            },
          },
          data: {
            ...account,
          },
        })
        .catch((err) => {
          console.log(err);
        });
    }

    return c.json(
      {
        success: true,
        code: 202,
        message: statusMessage(202),
        data: {
          id: checkUser.id,
          username: checkUser.username,
          email: checkUser.email!,
          active: checkUser.active,
          name: checkUser.profile?.name,
          bio: checkUser.profile?.bio,
          image: checkUser.image,
          token: updateSession.sessionToken,
          refresh_token: updateSession.refreshToken,
          role: checkUser.role.rolekey,
        },
      },
      202
    );
  }
};

// export default { signIn };
