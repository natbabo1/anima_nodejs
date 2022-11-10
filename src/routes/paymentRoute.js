const express = require("express");
const authenticate = require("../middlewares/authenticate");
const paymentController = require("../controllers/paymentController");
const subscriptionController = require("../controllers/subscriptionController");

const router = express.Router();

router.post(
  "/",
  authenticate,
  paymentController.buySubscription,
  subscriptionController.createSubscription
);

module.exports = router;
