const path = require("path");
const router = require("express").Router();
const sneakerApiRoutes = require("./sneaker-search-routes")
const wishlistRoutes = require("./wishlist-routes");

// sneaker routes
router.use("/sneakers", sneakerApiRoutes);

// wishlist routes
router.use("/wishlist", wishlistRoutes);

// for *, render html page
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/public/index.html"))
});

module.exports = router;