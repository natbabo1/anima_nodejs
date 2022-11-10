const { Tier } = require("../models");

exports.getAllTiers = () => Tier.findAll();
