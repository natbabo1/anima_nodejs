const express = require('express');
const ratingController = require('../controllers/ratingController');

const router = express.Router();

router
  .route('/ratings')
  .get(ratingController.getAllRatings)
  .post(ratingController.createRatings);

router
  .route('/ratings/:ratingId')
  .patch(ratingController.updateRating)
  .delete(ratingController.deleteRating);
module.exports = router;
