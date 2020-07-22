const router = require("express").Router();
const passport = require('passport');
router.get('/', (req,res)=> {
  req.session.destroy(function (err) {
    console.log('signed out')
  })
})
module.exports = router;