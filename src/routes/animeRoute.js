const express = require('express');
const animeController = require('../controllers/animeController');

const router = express.Router();

router.get('/highlight', animeController.getHighlighAnime);
router.get('/popular', animeController.getPopularAnimes);
router.get('/this-season', animeController.getThisSeasonAnimes);
router.get('/movies', animeController.getMovies);

module.exports = router;
