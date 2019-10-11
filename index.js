const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const passport = require('passport');
const fbStrategy = require('passport-facebook').Strategy;

//const config = require('./config.js');
require("dotenv").config();

app.listen(port, () => console.log('Listening on port 5000'));

app.get('/express_backend', (req, res, next) => {
  res.send({
    express: 'EXPRESS BACKEND IS CONNECTED',
    events: [{title: 'Sample Title!', bands: 'NECROT, Morbid Angel'}]
  })
  next()
})

// app.get('/auth/facebook/callback', (req, res, next) => {
// })
const fbStrategySettings = {
  clientID: process.env.FB_APP_ID,
  clientSecret: process.env.FB_APP_SECRET,
  callbackUrl: '/auth/facebook/callback'
}

function fbVerifyCallback(accessToken, refreshToken, profile, cb) {
  //access database/store vars firebase
  // console.log('good');
  // console.log('accessToken', accessToken);
  // console.log('refreshToken', refreshToken);
  // console.log('profile', profile);
  // console.log('callback', cb)
  return cb(null, profile)
}

passport.use(new fbStrategy(fbStrategySettings, fbVerifyCallback))






//https://firebase.google.com/ 
//http://www.passportjs.org/docs/facebook/ 
