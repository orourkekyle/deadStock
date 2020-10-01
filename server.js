const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const oauthRoutes = require("./routes/oauth-routes");
const profileRoutes = require("./routes/profile-routes");
const createdUserRoutes = require("./routes/create-user-routes");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
const cors = require("cors");
const { GoogleStrategy, LocalStrategy } = require("./config/passport");


const app = express();

app.use(cors());

app.use(cookieSession({
  maxAge: 24*60*60*1000,
  keys: [keys.cookiesession.cookieKey]
}));

const PORT = process.env.PORT || 3001;

// config body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client/build", "index.html"));
// });

// We need to use sessions to keep track of our user's login status
// passport.use("google", GoogleStrategy);
// passport.use("local", LocalStrategy);
app.use(passport.initialize());
app.use(passport.session());

// use routes
app.use(routes);
app.use("/oauth", oauthRoutes);
app.use("/local", createdUserRoutes);
app.use("/profile", profileRoutes);


// Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/deadstockDB", {
  useNewUrlParser: true,
  useFindAndModify: false
}, () => {
  console.log("CONNECTED TO MONGODB")
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
