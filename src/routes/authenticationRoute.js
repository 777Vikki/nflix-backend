const express = require('express');
const router = express.Router();
const authenticationhandler = require('../handlers/authenticationHandler');
const authorizationMiddleware = require('../middleware/authorization');

router.post('/reset-password', authorizationMiddleware.checkIfAuthenticated, authenticationhandler.resetPassword);


module.exports = router;