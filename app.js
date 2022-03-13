const express = require("express");
const app = express();
const mongoose = require('mongoose');

// export MONGO_PASSWORD='WRITE_PASSWORD'
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const database = "sample_mflix";

const connectionLink = `mongodb+srv://${username}:${password}@shopping-card.yjiw6.mongodb.net/${database}?retryWrites=true&w=majority`;
mongoose.connect(connectionLink,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }, () => {
          if(mongoose.connection.readyState === 1) {
            console.log('Server Started');
          } else {
              console.log('Not Connected');
          }
      }
  );

  mongoose.Promise = global.Promise;

app.use('/product', function(req, res, next) {
    // res.send('Working');
    res.send("properly working");
});


module.exports = app;