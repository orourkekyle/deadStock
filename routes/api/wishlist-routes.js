const router = require("express").Router();
const wishlistController = require("../../controllers/wishlistController");

console.log("HIT: wishlist-routes");

router
.route("/")
.get(wishlistController.find)
.post(wishlistController.createInUser)
// .post(wishlistController.createInPopular)
// .post(wishlistController.updateIdsInPopular)

router
.route("/createpopular")
.post(wishlistController.createInPopular)

router
.route("/updatepopular")
.post(wishlistController.updateIdsInPopular)

router
.route("/:id")
// .get(wishlistController.findById)
.delete(wishlistController.remove)

module.exports = router;