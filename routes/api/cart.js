const router = require("express").Router();
const passport = require('passport');
const userController = require('../../controllers/userController')
router.get('/:id', userController.findAll);
router.delete('/:id', userController.remove);
module.exports = router;