const router = require("express").Router();
const brewRoutes = require("./breweries");

// Book routes
router.use("/breweries", brewRoutes);

module.exports = router;
