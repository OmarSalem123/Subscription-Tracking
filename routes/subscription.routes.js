import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({ message: "Get all subscriptions" });
});

subscriptionRouter.post("/", (req, res) => {
  res.send({ message: "Create subscription" });
});

subscriptionRouter.get("/:id", (req, res) => {
  res.send({ message: "Get subscription details" });
});

subscriptionRouter.put("/:id", (req, res) => {
  res.send({ message: "Update subscription" });
});

subscriptionRouter.delete("/:id", (req, res) => {
  res.send({ message: "Delete subscription" });
});

subscriptionRouter.get("/user/:id", (req, res) => {
  res.send({ message: "Get all user subscriptions" });
});

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ message: "Cancel subscription" });
});

subscriptionRouter.put("/upcoming-renewals", (req, res) => {
  res.send({ message: "Get upcoming renewals" });
});

export default subscriptionRouter;
