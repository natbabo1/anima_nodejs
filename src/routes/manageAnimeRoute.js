const express = require('express');
const upload = require('../middlewares/upload');
const animeController = require('../controllers/animeController');
const episodeController = require('../controllers/episodeController');

const router = express.Router();

router.route('/').post(
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

router.route('/:animeId/ep').post(
  upload.fields([
    { name: 'imagePath', maxCount: 1 },
    { name: 'videoPath', maxCount: 1 }
  ]),
  episodeController.createEpisode
);

router
  .route('/:animeId/ep/:epId')
  .put(episodeController.updateEpisode)
  .delete(episodeController.deleteEpisode);

module.exports = router;
