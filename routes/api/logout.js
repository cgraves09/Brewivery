const router = require("express").Router();
const passport = require('passport');
router.get('/', (req,res)=> {
  req.session.destroy(function (err) {
    console.log('signed out');
    res.json({message: 'signed out'})
  })
})
module.exports = router;