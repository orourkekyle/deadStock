const path = require("path");
const router = require("express").Router();
const oauthRoutes = require("./oauth-routes");
const sneakerSearchRoutes = require("./sneaker-search-routes");


// oauth routes
router.use("/oauth", oauthRoutes);

// sneaker search routes
router.use("/sneakers", sneakerSearchRoutes);

// for *, render html page
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/public/index.html"))
})

module.exports = router;