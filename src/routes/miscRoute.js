const express = require('express');
const ratingController = require('../controllers/ratingController');
const genreController = require('../controllers/genreController');
const studioController = require('../controllers/studioController');

const router = express.Router();

router
  .route('/ratings')
  .get(ratingController.getAllRatings)
  .post(ratingController.createRating);
router
  .route('/ratings/:ratingId')
  .patch(ratingController.updateRating)
  .delete(ratingController.deleteRating);

router
  .route('/genres')
  .get(genreController.getGenres)
  .post(genreController.createGenre);
router
  .route('/genres/:genreId')
  .patch(genreController.updateGenre)
  .delete(genreController.deleteGenre);

router
  .route('/studios')
  .get(studioController.getStudios)
  .post(studioController.createStudio);
router
  .route('/studios/:studioId')
  .patch(studioController.updateStudio)
  .delete(studioController.deleteStudio);

module.exports = router;
