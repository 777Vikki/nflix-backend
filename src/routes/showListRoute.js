const express = require('express');
const router = express.Router();
const showListHandler = require('../handlers/showListHandler');
const authorizationMiddleware = require('../middleware/authorization');


router.get('/get-show/:type/:index', authorizationMiddleware.checkIfAuthenticated, showListHandler.getShowList);
router.get('/search/:type/:index', authorizationMiddleware.checkIfAuthenticated, showListHandler.searchShow);


module.exports = router;