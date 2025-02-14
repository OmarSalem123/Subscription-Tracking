import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import {
  createSubscription,
  getAllSubscriptions,
  getSubscription,
  getUserSubscriptions,
} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", authorize, getAllSubscriptions);

subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.get("/:id", authorize, getSubscription);

subscriptionRouter.put("/:id", (req, res) => {
  res.send({ message: "Update subscription" });
});

subscriptionRouter.delete("/:id", (req, res) => {
  res.send({ message: "Delete subscription" });
});

subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ message: "Cancel subscription" });
});

subscriptionRouter.put("/upcoming-renewals", (req, res) => {
  res.send({ message: "Get upcoming renewals" });
});

export default subscriptionRouter;
