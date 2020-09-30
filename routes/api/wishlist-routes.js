const router = require("express").Router();
const wishlistController = require("../../controllers/wishlistController");

console.log("HIT: wishlist-routes");

router
.route("/")
.get(wishlistController.findAll)
.post(wishlistController.create)

router
.route("/:id")
.delete(wishlistController.remove);

module.exports = router;