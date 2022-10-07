const express = require('express');
const ratingController = require('../controllers/ratingController');

const router = express.Router();

router.get('/rating', ratingController.getAllRatings);

module.exports = router;
