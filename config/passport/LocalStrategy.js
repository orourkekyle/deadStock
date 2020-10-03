const passport = require("passport");
const LocalStrategy = require("passport-local");
const keys = require("../keys");
const { LocalUser } = require("../../models");

passport.serializeUser((createduser, done) => {
    done(null, createduser.id);
})

passport.deserializeUser((id, done) => {
    CreateUser.findById(id).then((createduser) => {
        done(null, createduser);
    })
})

passport.use(new LocalStrategy(
    function(username, password, done) {
        console.log("HIT: LocalStrategy");
        LocalUser.findOne({ username: username }).then((currentUser) => {
            if(currentUser){
                console.log("this is currentUser in LocalStrat cb: ", currentUser);
                return done(null, currentUser);
            } else {
                new LocalUser({
                    username: username,
                    password: password
                }).save().then((newLocalUser) => {
                    console.log("this is newLocalUser: ", newLocalUser);
                    return done(null, newLocalUser);
                })
            }
        })
    }
))