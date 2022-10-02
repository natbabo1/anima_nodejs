const express = require('express');
const animeController = require('../controllers/animeController');

const router = express.Router();

router.get('/highlight', animeController.getHighlighAnime);

module.exports = router;
