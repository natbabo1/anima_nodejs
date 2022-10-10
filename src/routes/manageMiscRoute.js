const express = require('express');
const ratingController = require('../controllers/ratingController');
const genreController = require('../controllers/genreController');
const studioController = require('../controllers/studioController');

const router = express.Router();

router.route('/ratings').post(ratingController.createRating);
router
  .route('/ratings/:ratingId')
  .patch(ratingController.updateRating)
  .delete(ratingController.deleteRating);

router.route('/genres').post(genreController.createGenre);
router
  .route('/genres/:genreId')
  .patch(genreController.updateGenre)
  .delete(genreController.deleteGenre);

router.route('/studios').post(studioController.createStudio);
router
  .route('/studios/:studioId')
  .patch(studioController.updateStudio)
  .delete(studioController.deleteStudio);

module.exports = router;
