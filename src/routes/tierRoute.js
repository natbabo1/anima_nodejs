const express = require("express");
const tierController = require("../controllers/tierController");

router = express.Router();

router.get("/", tierController.getAllTiers);

module.exports = router;
