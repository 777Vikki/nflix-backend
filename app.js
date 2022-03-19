const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const userroute = require('./src/routes/userRoute');
const showRoute = require('./src/routes/showListRoute');
const authenticationRoute = require('./src/routes/authenticationRoute');
// export MONGO_PASSWORD='WRITE_PASSWORD'
const username = process.env.MONGO_USERNAME || 'saurabh10';
const password = process.env.MONGO_PASSWORD || 'MONGODB';
const database = "sample_mflix";

app.use(bodyparser.json());

// const connectionLink = `mongodb+srv://${username}:${password}@cluster0.qvteq.mongodb.net/${database}?retryWrites=true&w=majority`;
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

app.use('/users',userroute);
app.use('/shows', showRoute);
app.use('/auth', authenticationRoute)


module.exports = app;