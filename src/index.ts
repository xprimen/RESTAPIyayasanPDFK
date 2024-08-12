import { swaggerUI } from "@hono/swagger-ui";
import { OpenAPIHono } from "@hono/zod-openapi";
import AuthRoutes from "@routes/authRoutes";
import UsersRoutes from "@routes/usersRoutes";
import { cors } from "hono/cors";
import { JwtVariables } from "hono/jwt";
import { logger } from "hono/logger";
import { docSignIn, docSignInResponse } from "./docs/authDoc";

type Variables = JwtVariables;
const port = 3131;

// const app = new Hono();
const app = new OpenAPIHono<{ Variables: Variables }>();

app
  .get(
    "/dokumentasi-rest-api",
    swaggerUI({
      url: "/doc",
    })
  )
  .use(logger())
  .basePath("/api")
  .use(
    cors({
      origin: "*",
      allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"],
      allowHeaders: ["Content-Type", "Authorization"],
    })
  )
  .route("/auth", AuthRoutes)
  .basePath("/secure")
  .route("/users", UsersRoutes);

// konfigurasi Dokumentasi OpenAPI
app.openapi(docSignIn, docSignInResponse);

app.doc("/doc", {
  info: {
    title: "Dokumentasi REST API",
    version: "v1",
  },
  openapi: "3.1.0",
});

export default {
  fetch: app.fetch,
  port,
};
// export default app;
