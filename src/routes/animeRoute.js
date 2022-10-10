const express = require('express');
const upload = require('../middlewares/upload');
const animeController = require('../controllers/animeController');
const episodeController = require('../controllers/episodeController');

const router = express.Router();

router.route('/').get(animeController.searchAnime);

router.get('/highlight', animeController.getHighlighAnime);
router.get('/popular', animeController.getPopularAnimes);
router.get('/this-season', animeController.getThisSeasonAnimes);
router.get('/movies', animeController.getMovies);

router.route('/:animeId/ep').get(episodeController.getEpisodeList);

module.exports = router;
