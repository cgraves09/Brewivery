const router = require("express").Router();
const passport = require('passport');
const userController = require('../../controllers/userController')
router.put('/', userController.update);
module.exports = router;

