const router = require("express").Router();
const brewRoutes = require("./breweries");
const clientRoute = require('./client');
const loginRoute = require('./login');
const logOutRoute = require('./logout');
const userRoute = require('./user');
const cartRoute = require('./cart');

// Breweries routes
router.use("/breweries", brewRoutes);
router.use('/clients', clientRoute);
router.use('/login', loginRoute);
router.use('/logout', logOutRoute);
router.use('/clients/:id', userRoute);
router.use('/cart/', cartRoute);
module.exports = router;
