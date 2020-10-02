const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const oauthRoutes = require("./routes/oauth-routes");
const profileRoutes = require("./routes/profile-routes");
const localRoutes = require("./routes/local-user-routes");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
const cors = require("cors");
require("./config/passport");

// define port
const PORT = process.env.PORT || 3001;

// store express in app
const app = express();

// use cors for browser security
app.use(cors());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

// use cookie session and encrypt
app.use(cookieSession({
  maxAge: 24*60*60*1000,
  keys: [keys.cookiesession.cookieKey]
}));

// We need to use sessions to keep track of our user's login status
app.use(passport.initialize());
app.use(passport.session());

// config body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/deadstockDB", {
  useNewUrlParser: true,
  useFindAndModify: false
}, () => {
  console.log("CONNECTED TO MONGODB")
});

// use routes
app.use("/oauth", oauthRoutes);
app.use("/local", localRoutes);
app.use("/profile", profileRoutes);
app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
