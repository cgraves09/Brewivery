const router = require("express").Router();
const brewController = require("../../controllers/brewController");

// Matches with "/api/books"
router.route("/")
  .get(brewController.findAll);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(brewController.findById);

module.exports = router;
