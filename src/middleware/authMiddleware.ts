import prisma from "@prisma/index";
import { bearerAuth } from "hono/bearer-auth";
import { createMiddleware } from "hono/factory";
import { verify } from "hono/jwt";
import { JWTSign } from "../types";
import { UAParser } from "ua-parser-js";
import { Context } from "hono";

// Middleware untuk menangkap dan memvalidasi JWT Token dari request header
const authMiddleware = createMiddleware(async (c: Context, next) => {
  // menggunakan plugin bearerAuth dari hono untuk pengecekan beare di request header
  const bearer = bearerAuth({
    verifyToken: async (token) => {
      // verifikasi token yg sudah difilter
      try {
        const verifiedSession = (await verify(
          token,
          process.env.JWT_KEY!
        )) as JWTSign;
        const device =
          UAParser(c.req.header("user-agent")).device.type || "browser"; // pengecekan jenis device yang digunakan

        // jika verifikasi berhasil, cek ke tabel session apakah userId dengan device saat ini sama dengan yg ada di tabel session
        const checkSession = await prisma.session
          .findFirst({
            where: {
              device: device,
              userId: String(verifiedSession.sub),
              // logout: null,
            },
          })
          .catch((err) => {
            return false;
          })
          .then((res) => {
            return Boolean(res);
          });

        return true;
      } catch (err) {
        const error = String(err).split(":")[0];
        // console.log(error);
        return false;
      }
    },
  });
  return bearer(c, next);
});

export default authMiddleware;
