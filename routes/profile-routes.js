const router = require('express').Router();


console.log("HIT: profile-routes");


const authCheck = (req, res, next) => {
    if(!req.user){
        // if user is NOT logged in
        res.redirect("/oauth/login");
    }else {
        // if user IS logged in
        next();
    }
};

router.get('/', authCheck, (req, res) => {
    res.render("profile", { user: req.user});
})

module.exports = router;