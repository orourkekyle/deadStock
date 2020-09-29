const router = require("express").Router();
const passport = require("passport");

// auth login
// router.get("/", (req, res) => {
//     res.redirect("login");
// });

console.log("this is oauth-routes");

router
.route("/auth/*")
.get((req, res) => {
    console.log("this is req.url: ", req.url);
    console.log("hitting any route we send");
})

// auth logout
router
.route("/auth/logout")
.get((req, res) => {
    // let redirectPath = (process.env.NODE_ENV === "production") ? 
    // handle with passport
    req.logout();
    res.redirect("/");
});

// auth with google
// this route matches: http://localhost:3001/auth/google
router
.route('/auth/google')
.get(passport.authenticate("google", {
    scope: ["profile"]
}),(req, res) => {
    console.log("hitting /auth/google route");
} );

// cb route for google to redirect to
router
.route('/auth/google/redirect')
.get(passport.authenticate("google"), (req, res) => {
    // let redirectPath + 
    res.redirect('/profile');
})

module.exports = router;