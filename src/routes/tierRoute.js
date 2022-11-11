const express = require("express");
const tierController = require("../controllers/tierController");

const router = express.Router();

router.get("/", tierController.getAllTiers);
router
  .route("/vpass")
  .get(tierController.getVpassToken)
  .post(tierController.checkVpassToken);

module.exports = router;
