const express = require('express');
const router = express.Router();
const userhandler = require('../handlers/userHandler');


router.post('/sign-up',userhandler.SaveUserDetail);


module.exports = router;