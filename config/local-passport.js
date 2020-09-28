// const passport = require("passport");
// const LocalStrategy = require("passport-local");
// const keys = require("./keys");
// const {CreateUser} = require("../models");

// passport.serializeUser((createduser, done) => {
//     done(null, createduser.id);
// })

// passport.deserializeUser((id, done) => {
//     CreateUser.findById(id).then((createduser) => {
//         done(null, createduser);
//     })
// })

// passport.use(new LocalStrategy({
//     function(username, password, done) {
//         console.log("hitting LocalStrategy");
//         CreateUser.findOne({ username: username }).then((currentUser) => {
//             if(currentUser){
//                 console.log("this is currentUser in LocalStrat cb: ", currentUser);
//                 done(null, currentUser);
//             } else {
//                 new CreateUser({
//                     username: username,
//                     password: password
//                 }).save().then((newCreatedUser) => {
//                     console.log("this is newCreatedUser: ", newCreatedUser);
//                     done(null, newCreatedUser);
//                 })
//             }
//         })
//     }
// }))