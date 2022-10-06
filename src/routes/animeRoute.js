const express = require('express');
const animeController = require('../controllers/animeController');
const episodeController = require('../controllers/episodeController');

const router = express.Router();

router.get('/highlight', animeController.getHighlighAnime);
router.get('/popular', animeController.getPopularAnimes);
router.get('/this-season', animeController.getThisSeasonAnimes);
router.get('/movies', animeController.getMovies);

router.get('/:animeId/ep', episodeController.getEpisodeList);

module.exports = router;
