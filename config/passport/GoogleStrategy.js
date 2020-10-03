const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("../keys");
const {GoogleUser} = require("../../models");
// const SignUpUser = require("../models/create-user");

passport.serializeUser((googleuser, done) => {
    done(null, googleuser.id);
});

passport.deserializeUser((id, done) => {
    GoogleUser.findById(id).then((googleuser) => {
        done(null, googleuser);
    });
});

let redirectPath = "http://localhost:3001/oauth/google/redirect";

passport.use(new GoogleStrategy({
    // options for the google strat
    callbackURL: redirectPath,
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
    // passport cb function
    //first check if user already exists in our db
    console.log("this is google profile: ", profile);
    GoogleUser.findOne({googleId: profile.id}).then((currentUser) => {
        if(currentUser){
            // already have the user
            console.log("this is currentUser inside GoogleStrat cb: ", currentUser);
            done(null, currentUser);
        } else{
            //if not, create user in our db
            new GoogleUser({
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

