const router = require("express").Router();
const passport = require("passport");
// const { route } = require("./react-routes");

// may not be accurate with REACT

// auth login
router.get("/", (req, res) => {
    res.render("login");
});

// auth logout
router
.route("./logout")
.get((req, res) => {
    // handle with passport
    req.logout();
    res.redirect("/");
});

// auth with google
router
.route('/google')
.get(passport.authenticate("google", {
    scope: ["profile"]
}));

// cb route for google to redirect to
router
.route('/google/redirect')
.get( passport.authenticate("google"), (req, res) => {
    // let redirectPath + 
    res.redirect('/profile');
})

module.exports = router;