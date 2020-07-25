const router = require("express").Router();
const loginController = require("../../controllers/loginController");
router.route('/').post(loginController.create);
router.get('/:email', loginController.findOne);
module.exports = router;
