const passport = require("passport");
// const SignupStrategy = require("./SignupStrategy");
// const SigninStrategy = require("./SigninStrategy");
const GoogleStrategy = require("./GoogleStrategy");
const LocalStrategy = require("./LocalStrategy");


passport.use("google", GoogleStrategy);
passport.use("local", LocalStrategy);
// passport.use("signup", SignupStrategy);
// passport.use("signin", SigninStrategy);

module.exports = passport;
