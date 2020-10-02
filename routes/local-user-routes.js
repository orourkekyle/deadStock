const router = require("express").Router();
const passport = require("passport");

console.log("HIT: create-user-routes");

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
.post(passport.authenticate("local", { failureRedirect: "/signup" }),
function(req, res) {
    console.log("before res.redirect('/profile') inside local-user-routes");
    res.redirect("/profile");
}
)
// router
// .route("/createuser")
// .post(passport.authenticate("local", { successRedirect: "/profile", failureRedirect: "/signup" }))

router
.route("/getuser")
.get(passport.authenticate("local", { failureRedirect: "/login" }),
function(req, res) {
    res.redirect("/profile")
})

module.exports = router;