const express = require('express');
const manageAnimeRoute = require('./manageAnimeRoute');
const manageMiscRoute = require('./manageMiscRoute');

const router = express.Router();

router.use('/animes', manageAnimeRoute);
router.use('/misc', manageMiscRoute);

module.exports = router;
