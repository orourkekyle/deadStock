const router = require("express").Router();
const sneakerApiController = require("../../controllers/sneakerApiController.js");

// Matches with "/api/google"
router
  .route("/")
  .get(sneakerApiController.findAll);

  // router.route('/:id')
  // .get(sneakerApiController.findById)
  // .put(sneakerApiController.update)
  // .delete(sneakerApiController.remove);
module.exports = router;