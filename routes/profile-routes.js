const router = require('express').Router();

console.log("HIT: profile-routes");

const authCheck = (req, res, next) => {
    console.log("req.user: ", req);
    if(!req.user){
        // if user is NOT logged in
        res.redirect("/oauth/login");
        // res.redirect("/singup");
    }else {
        // if user IS logged in
        next();
    }
};

router.get('/', authCheck, (req, res) => {
    // console.log("inside profile route req.user: ", req.user);
    res.render("profile", { user: req.user});
});

module.exports = router;