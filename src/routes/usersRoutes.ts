import { createUser, getAllUsers, getUser } from "@controllers/users";
import authMiddleware from "@middleware/authMiddleware";
import { Hono } from "hono";

const UsersRoutes = new Hono();
UsersRoutes.get("/", authMiddleware, getAllUsers); // routing ke controller getAllUsers
UsersRoutes.get("/:id", authMiddleware, getUser); // routing ke controller getUser
// UsersRoutes.post("/", createUser); // rouing ke controller createUser

export default UsersRoutes;
