const express = require('express');
const upload = require('../middlewares/upload');
const animeController = require('../controllers/animeController');
const episodeController = require('../controllers/episodeController');

const router = express.Router();

router
  .route('/')
  .get(animeController.searchAnime)
  .post(
    upload.fields([
      { name: 'coverImage', maxCount: 1 },
      { name: 'highlightImage', maxCount: 1 }
    ]),
    animeController.createAnime
  );

router
  .route('/:animeId')
  .put(
    upload.fields([
      { name: 'coverImage', maxCount: 1 },
      { name: 'highlightImage', maxCount: 1 }
    ]),
    animeController.updateAnime
  )
  .delete(animeController.deleteAnime);

router.get('/highlight', animeController.getHighlighAnime);
router.get('/popular', animeController.getPopularAnimes);
router.get('/this-season', animeController.getThisSeasonAnimes);
router.get('/movies', animeController.getMovies);

router.get('/:animeId/ep', episodeController.getEpisodeList);

module.exports = router;
