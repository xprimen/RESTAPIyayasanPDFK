import { Context } from "hono";

export default (result: any, c: Context) => {
  if (!result.success) {
    return c.json(
      {
        success: false,
        message: "Error",
        code: 400,
        data: result.error.issues.map(
          (issue: { path: any[]; message: any }) => {
            return {
              field: issue.path[0],
              message: issue.message,
            };
          }
        ),
      },
      400
    );
  }
};
