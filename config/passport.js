const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./keys");
const GoogleUser = require("../models/google-user");
const SignUpUser = require("../models/signup-user");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    GoogleUser.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(new GoogleStrategy({
    // options for the google strat
    callbackURL: "http://localhost:3000/auth/google/redirect",
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
    // passport cb function
    //first check if user already exists in our db
    console.log("this is passport.use");
    GoogleUser.findOne({googleId: profile.id}).then((currentUser) => {
        if(currentUser){
            // already have the user
            console.log("this is currentUser inside passport cb if check: ", currentUser);
            done(null, currentUser);
        } else{
            //if not, create user in our db
            new User({
                username: profile.displayName,
                googleId: profile.id
            }).save().then((newUser) => {
                console.log("newUser created in mongo from passport cb function: ", newUser);
                done(null, newUser);
            })
        }
    })
})
)

// sign up user stuff
passport.deserializeUser((id, done) => {
    SignUpUser.findById(id).then((user) => {
        done(null, user);
    });
});

