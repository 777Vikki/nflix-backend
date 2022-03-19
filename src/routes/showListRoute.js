const express = require('express');
const router = express.Router();
const showListHandler = require('../handlers/showListHandler');


router.get('/get-show/:type/:index', showListHandler.getShowList);

module.exports = router;