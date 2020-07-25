const router = require("express").Router();
const brewController = require("../../controllers/brewController");

// Matches with "/api/breweries"
router.route("/")
  .get(brewController.findAll);

// Matches with "/api/breweries/:id"
router
  .route("/:id")
  .get(brewController.findById);

module.exports = router;
