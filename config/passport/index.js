// const passport = require("passport");
// const GoogleStrategy = require("./GoogleStrategy");
// const LocalStrategy = require("./LocalStrategy");

// passport.use("google", GoogleStrategy);
// passport.use("local", LocalStrategy);

// module.exports = passport;

module.exports = {
    GoogleStrategy: require("./GoogleStrategy"),
    LocalStrategy: require("./LocalStrategy")
}