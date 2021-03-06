const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const session = require('express-session');
const passport = require('passport');
require('./passport/localStrategy')(passport);
//sessions
app.use(
  session({
  secret: 'beer-life', //pick a random string to make the hash that is generated secure
  resave: true, //required
  saveUninitialized: true //required
  })
)
app.use( (req, res, next) => {
  console.log('req.session', req.session);
  return next();
});
app.use(passport.initialize())
app.use(passport.session()) // calls serializeUser and deserializeUser

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/brewivery");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
