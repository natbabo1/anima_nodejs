const express = require('express');
const seasonController = require('../controllers/seasonController');
const ratingController = require('../controllers/ratingController');
const genreController = require('../controllers/genreController');
const studioController = require('../controllers/studioController');

const router = express.Router();

router.route('/ratings').get(ratingController.getAllRatings);

router.route('/genres').get(genreController.getGenres);

router.route('/studios').get(studioController.getStudios);

router.get('/season', seasonController.getSeason);

module.exports = router;
