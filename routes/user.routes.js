import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send({ message: "Get All Users" });
});

userRouter.get("/:id", (req, res) => {
  res.send({ message: "Get user details" });
});

userRouter.post("/", (req, res) => {
  res.send({ message: "Create New User" });
});

userRouter.put("/:id", (req, res) => {
  res.send({ message: "Update user by id" });
});

userRouter.delete("/:id", (req, res) => {
  res.send({ message: "Delete User" });
});

export default userRouter;
