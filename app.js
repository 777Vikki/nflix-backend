const express = require("express");
const app = express();


app.use('/product', function(req, res, next) {
    res.send('Working');
});


module.exports = app;