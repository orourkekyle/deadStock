const path = require("path");
const router = require("express").Router();
const oauthRoutes = require("./oauth-routes");
const sneakerSearchRoutes = require("./sneaker-search-routes");


// oauth routes
router.use(oauthRoutes);

// sneaker search routes
router.use(sneakerSearchRoutes);

// for *, render html page
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"))
})

module.exports = router;