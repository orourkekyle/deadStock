const express = require("express");
const mongoose = require("mongoose");
const reactRoutes = require("./routes/react-routes");
const oauthRoutes = require("./routes/oauth-routes")
const passportSetup = require("./config/passport")
const keys = require("./config/keys")
const cookieSession = require("cookie-session")
const passport = require("passport");
// const db = require("./models")

const app = express();

app.use(cookieSession({
  maxAge: 24*60*60*1000,
  keys: [keys.session.cookieKey]
}))

const PORT = process.env.PORT || 3000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(reactRoutes);
app.use(oauthRoutes);

// We need to use sessions to keep track of our user's login status
app.use(passport.initialize());
app.use(passport.session());

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/deadstockDB", () => {
  console.log("CONNECTED TO MONGODB")
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
