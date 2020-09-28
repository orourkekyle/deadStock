const router = require("express").Router();
const passport = require("passport");

console.log("this is create-user-routes");

// logout 
router
.route("/logout")
.get((req, res) => {
    req.logout();
    res.redirect("/");
});

// auth with local
router
.route("/createuser")
.get(passport.authenticate("local", { failureRedirect: "/login" }),
function(req, res) {
    res.redirect("/profile")
})

module.exports = router;